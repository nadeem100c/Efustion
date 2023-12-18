import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SelectList } from 'react-native-dropdown-select-list'
import * as SplashScreen from 'expo-splash-screen'



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

const PersonalInfo = ({ navigation }) => {
    const [selected, setSelected] = useState("");
    const [showPassword, setShowPassword] = useState(false);

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
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                enabled
            >

                <View style={Styles.header}>
                    <View style={{ marginLeft: 20, marginTop: 20 }}>
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
                            Etape 1 sur 4
                        </Text>
                    </View>

                </View>

                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={{ flex: 1, backgroundColor: "#e8e8e8", }}>
                        <View style={{ alignItems: "center", marginTop: 30 }}>

                            <TextInput
                                placeholder='Email'
                                style={Styles.inputfld}
                            />
                            <TextInput
                                placeholder='Nom et prénom '
                                style={Styles.inputfld}
                            />
                            <TextInput
                                placeholder='Numéro de téléphone'
                                style={Styles.inputfld}
                            />
                            <View style={Styles.inputfld}>
                                <TextInput
                                    placeholder='Mots de passe'
                                    style={{ paddingTop: 10 }}
                                    secureTextEntry={!showPassword}
                                />
                                <TouchableOpacity
                                    style={Styles.iconContainer}
                                    onPress={() => setShowPassword(!showPassword)}
                                >
                                    <Image
                                        source={showPassword ? require("../../../../assets/Images/hide.png") : require("../../../../assets/Images/show.png")}
                                        style={Styles.passwordIcon}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={Styles.inputfld}>
                                <TextInput
                                    placeholder='Confirmer mots de passe'
                                    style={{ paddingTop: 10 }}
                                    secureTextEntry={!showPassword}
                                />
                                <TouchableOpacity
                                    style={Styles.iconContainer}
                                    onPress={() => setShowPassword(!showPassword)}
                                >
                                    <Image
                                        source={showPassword ? require("../../../../assets/Images/hide.png") : require("../../../../assets/Images/show.png")}
                                        style={Styles.passwordIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.selectedList}>

                                <SelectList
                                    setSelected={(val) => setSelected(val)}
                                    data={data}
                                    save="value"
                                    placeholder='Choisir le type de réparation'
                                    searchPlaceholder='Choisir le type de réparation'
                                    boxStyles={{ borderWidth: 0, height: 50 }}
                                />

                            </View>



                        </View>
                        <View style={Styles.savebtn}>
                            <TouchableOpacity style={{ alignItems: "center", }}
                                onPress={() => navigation.navigate("Adress")}
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

export default PersonalInfo
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
        marginTop: 10,
    }
})