import React from 'react'
import { Text, View, StyleSheet,Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Ionicons} from '@expo/vector-icons'

const ClinetHome = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e8e8e8" }}>
      <View style={Styles.headerContainer}>
      <View style = {{flexDirection:"row"}}>
          <Image
            source={require('../../../../assets/Images/logo.png')}
            style={Styles.avatar}
          />
      <Text>UserName</Text>
      <Text>wellcome</Text>

      <Ionicons name='notifications-outline' size={30}  color="red"/>
      </View>
      </View>
      <View style = {{flex:3,backgroundColor:'#e8e8e8',height:"70%"}}> 
      </View>

    </SafeAreaView>
  )

}

export default ClinetHome
const Styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    height: "30%",
    backgroundColor: "green",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop:30
  },
  avatar:{
    height:50,
    width:50,
    borderRadius:60,
    borderWidth:1,
    borderColor:"white"
  }
})