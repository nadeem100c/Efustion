import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Image, StatusBar, TouchableOpacity, Dimensions } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import * as SplashScreen from 'expo-splash-screen'
import { useNavigation } from '@react-navigation/core'

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


const SelectUserType = () => {

    const navigation = useNavigation()

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
    return (
        <SafeAreaProvider style={styles.Container}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.headerView}>
                <Text style={styles.wellcometxt}>Bienvenue chez</Text>
                <Image source={require('../../../assets/Images/logo.png')}
                    style={styles.logo}
                />
                <Text style={{ fontSize: 23, fontFamily: "Montserrat_700Bold", color: "#2f8b0b" }}>rFusion</Text>
                <View style={{ marginTop: 40 }} >
                    <Text style={styles.subscribetxt}>Voulez-vous vous abonner{"\n"}             en tant que:</Text>
                </View>
            </View>
            <View style={styles.buttonlist}>
                <TouchableOpacity style={styles.buttons}
                    onPress={() => navigation.navigate("Registration")}
                >
                    <Text style={styles.buttontxt}>Client</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttons}
                    onPress={() => navigation.navigate("PersonalInfo")}
                >
                    <Text style={styles.buttontxt}>Réparateur</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttons} >
                    <Text style={styles.buttontxt}>Courier</Text>
                </TouchableOpacity>


            </View>




        </SafeAreaProvider>
    )
}

export default SelectUserType
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#2f8b0b"
    },
    headerView: {
        height: "70%",
        backgroundColor: "#e6e1e1",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: "center",

    },
    wellcometxt: {
        fontSize: RFPercentage(4),
        fontFamily: "Montserrat_600SemiBold",
        color: "#2f8b0b",
        marginTop: 40
    },
    footerstyle: {
        flex: 1,

    },
    logo: {
        width: windowWidth * 0.3,
        height: windowHeight * 0.2
    },
    buttonlist: {
        height: 350,
        width: "90%",
        backgroundColor: "white",
        bottom: 140,
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 10,
        paddingTop: 40

    },
    subscribetxt: {
        fontFamily: "Montserrat_600SemiBold",
        fontSize: RFPercentage(3),
        color: "#2f8b0b"
    }, buttons: {
        width: "80%",
        justifyContent: "center",
        alignSelf: "center",
        height: 50,
        backgroundColor: "green",
        marginTop: 30,
        borderRadius: 10
    },
    buttontxt: { textAlign: "center", color: "white", fontFamily: "Montserrat_600SemiBold", fontSize: RFPercentage(2.5) }
})