import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
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

const RegistrationStep2 = ({ navigation }) => {

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
            <View style={Styles.header}>
                <View style={{ marginLeft: 20, marginTop: 20 }}>
                    <TouchableOpacity onPress={handleBackBtn}>
                        <Image source={require("../../../assets/Images/backbtn.png")}
                            style={Styles.backbtn}
                        />
                    </TouchableOpacity>
                    <Text style={Styles.headerTitle}>S'INSCRIRE EN{"\n"}TANT QUE CLIENT</Text>
                    <Text style={{
                        color: "white",
                        fontSize: 15,
                        marginTop: 10,
                        fontFamily: "Montserrat_600SemiBold"
                    }}>
                        Etape 2 sur 2
                    </Text>
                </View>

            </View>
            <View style={{ flex: 1, backgroundColor: "#e8e8e8", }}>
                <View style={{ alignItems: "center", marginTop: 50 }}>

                    <TextInput
                        placeholder='Adresse'
                        style={Styles.inputfld}
                    />
                    <TextInput
                        placeholder='Ville '
                        style={Styles.inputfld}
                    />
                    <TextInput
                        placeholder='Pays'
                        style={Styles.inputfld}
                    />
                    <TextInput
                        placeholder='Code postale'
                        style={Styles.inputfld}
                    />
                    <Text>
                        Télécharger la photo personnel
                    </Text>

                </View>
                <View style={{ marginTop: 50, backgroundColor: "#2f8b0b", height: 50, width: "80%", justifyContent: "center", alignSelf: "center", borderRadius: 10 }}>
                    <TouchableOpacity style={{ alignItems: "center", }}>
                        <Text style={{ color: "white", fontFamily: "Montserrat_700Bold" }}>
                            Choisir un fichier
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 30, backgroundColor: "#2f8b0b", height: 50, width: "80%", justifyContent: "center", alignSelf: "center", borderRadius: 10 }}>
                    <TouchableOpacity style={{ alignItems: "center", }}>
                        <Text style={{ color: "white", fontFamily: "Montserrat_700Bold" }}>
                            S’inscrire
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )

}

export default RegistrationStep2
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
        fontSize: 35,
        fontFamily: "Montserrat_600SemiBold"
    },
    inputfld: { height: 50, width: "80%", borderRadius: 25, backgroundColor: "white", marginVertical: 10, paddingLeft: 30 }
})