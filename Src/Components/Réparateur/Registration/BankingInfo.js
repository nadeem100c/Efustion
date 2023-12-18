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

const BankingInfo = ({ navigation }) => {





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
                            Etape 4 sur 4
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


                        <View style={Styles.savebtn}>
                            <View style={{ alignItems: "center", }}
                            >
                                <Text style={{ color: "white", fontFamily: "Montserrat_700Bold" }}>
                                    12 MAD/mois
                                </Text>
                            </View>
                        </View>


                    </View>
                    <View style={{ height: "30%", backgroundColor: "green" }}>
                        <View style={Styles.buttonlist}>
                            <Text>
                                Nom du porteur de la carte
                            </Text>
                            <View style={Styles.txtinput}>
                                <TextInput

                                />
                            </View>

                            <Text style={{ marginTop: 20, fontWeight: "600", color: "#2f8b0b" }}>
                                Numéro de la carte
                            </Text>
                            <View style={Styles.txtinput}>
                                <TextInput

                                />
                            </View>

                            <View style={{ flexDirection: "row", marginRight: 10, marginTop: 20 }}>
                                <View>
                                    <Text>Date d’expiration</Text>
                                    <TextInput
                                        style={{ height: 50, width: 100, backgroundColor: "red", borderRadius: 25 }}
                                    />
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text>CVV</Text>
                                    <TextInput
                                        style={{ height: 50, width: 100, backgroundColor: "red", borderRadius: 25 }}
                                    />
                                </View>


                            </View>
                            <TouchableOpacity style={Styles.savebtn}>
                                <View style={{ alignItems: "center", }}
                                >
                                    <Text style={{ color: "white", fontFamily: "Montserrat_700Bold" }}>
                                        S’inscrire
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )

}

export default BankingInfo
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
    },
    uploadingbtn: {
        marginVertical: 10,
        backgroundColor: "#2f8b0b",
        height: 50,
        width: "80%",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 25
    },
    txt: {
        fontWeight: "600",
        color: "#9fa2a6"
    },
    btntxt: {
        color: "white",
        fontFamily: "Montserrat_700Bold"
    }, buttonlist: {
        height: 400,
        width: "90%",
        backgroundColor: "white",
        bottom: 250,
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 10,
        paddingTop: 40

    },
    txtinput: {

        height: 50,
        width: "70%",
        borderRadius: 25,
        backgroundColor: "#e6e1e1",
        justifyContent: "center",
        paddingLeft: 20
    }
})