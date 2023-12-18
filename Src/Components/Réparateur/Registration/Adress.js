import React, { useEffect, useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SelectList } from 'react-native-dropdown-select-list'
import * as SplashScreen from 'expo-splash-screen'
import CountryPicker from 'react-native-country-picker-modal';



import {
    useFonts,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';


const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("window").height

const Adress = ({ navigation }) => {
    const [selected, setSelected] = useState("");
    const [country, setCountry] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [cityModalVisible, setCityModalVisible] = useState(false);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);

    const data = [
        { key: '1', value: 'Nos Services', disabled: true },
        { key: '2', value: 'Plomberie' },
        { key: '3', value: 'Construction' },
        { key: '4', value: 'Electriciens' },
        { key: '5', value: 'Menuisier' },
        { key: '6', value: 'menage' },
        { key: '7', value: 'penture' },
        { key: '8', value: 'Jardinage' },
        { key: '9', value: 'Soudeur' },
        { key: '10', value: 'Topisserie' },

    ]

  

    const [fontsLoaded] = useFonts({
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
    })

    useEffect(() => {
        SplashScreen.preventAutoHideAsync()
        if (fontsLoaded) {
            SplashScreen.hideAsync()
        }
    }, [fontsLoaded])
    if (!fontsLoaded) {
        return null
    }

    const handleBackBtn = () => {
        navigation.goBack()
    }

    const onSelectCountry = (selectedCountry) => {
        setCountry(selectedCountry);
        setModalVisible(false);
    };



    const handleCitySelect = (city) => {
        setSelectedCity(city);
        setCityModalVisible(false);
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                enabled
            >

                <View style={Styles.header}>
                    <View style={{
                        marginLeft: 20,
                        marginTop: 20
                    }}>
                        <TouchableOpacity onPress={handleBackBtn}>
                            <Image source={require("../../../../assets/Images/backbtn.png")}
                                style={Styles.backbtn}
                            />
                        </TouchableOpacity>
                        <Text style={Styles.headerTitle}>s’INSCRIRE EN TANT {"\n"} QUE REPARATEUR</Text>
                        <Text style={{
                            color: "white",
                            fontSize: 15,
                            marginTop: 10,
                            fontFamily: "Montserrat_600SemiBold"
                        }}>
                            Etape 2 sur 4
                        </Text>
                    </View>

                </View>

                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={{
                        flex: 1,
                        backgroundColor: "#e8e8e8",
                    }}>
                        <View style={{
                            alignItems: "center",
                            marginTop: 30
                        }}>

                            <TextInput
                                placeholder='Adresse'
                                style={Styles.inputfld}
                            />

                            <View style={{
                                flexDirection: "row",
                                backgroundColor: "white",
                                width: "80%",
                                height: 50,
                                borderRadius: 25,
                                paddingLeft: 20,
                                paddingTop: 10
                            }}>
                                <CountryPicker
                                    visible={modalVisible}
                                    onClose={() => setModalVisible(false)}
                                    withCountryNameButton
                                    onSelect={onSelectCountry}
                                    countryCode={country.cca2}
                                    withFlagButton={false}
                                    withFilter
                                    withAlphaFilter
                                    translation='eng'
                                    closeable
                                    placeholder="Pays"
                                />
                                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={{ fontSize: 20, }}>{country.name}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setModalVisible(!modalVisible)}
                                    style={{
                                        position: "absolute",
                                        right: 10,
                                        marginTop: 10
                                    }}
                                >
                                    <Image
                                        source={require('../../../../assets/Images/drop.png')}
                                        style={{
                                            height: 30,
                                            width: 30,
                                            tintColor: "green"
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.selectedList}>

                                <SelectList
                                    setSelected={(val) => setSelected(val)}
                                    data={data}
                                    save="value"
                                    placeholder='Ville'
                                    searchPlaceholder='Choisir le type de réparation'
                                    boxStyles={{ borderWidth: 0, height: 50 }}
                                />

                            </View>

                            <TextInput
                                placeholder='Code postales'
                                style={Styles.inputfld}
                                keyboardType='number-pad'
                            />



                        </View>
                       



                        <View style={Styles.savebtn}>
                            <TouchableOpacity style={{ alignItems: "center", }}
                                onPress={() => navigation.navigate("Identification")}
                            >
                                <Text style={{ color: "white", fontFamily: "Montserrat_700Bold" }}>
                                    Suivant
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )

}

export default Adress
const Styles = StyleSheet.create({
    header: {
        height: 200,
        backgroundColor: "#2f8b0b",
        width: "100%",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    backbtn: {
        height: windowHeight * 0.05,
        width: windowWidth * 0.05,
        tintColor: "white",
    },
    headerTitle: {
        color: "white",
        fontSize: 30,
        fontFamily: "Montserrat_600SemiBold"
    },
    inputfld: {
        height: 50,
        width: "80%",
        borderRadius: 25,
        backgroundColor: "white",
        marginVertical: 10,
        paddingLeft: 30
    },
    iconContainer: {
        position: "absolute",
        right: 10,
        padding: 10,
    },
    passwordIcon: {
        height: 20,
        width: 20,
        resizeMode: "contain",
    },
    savebtn: {
        marginTop: 50,
        backgroundColor: "#2f8b0b",
        height: 50,
        width: "80%",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 25
    },
    selectedList: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 25,
        marginVertical: 10,
    }
})