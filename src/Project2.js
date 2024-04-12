import { ImageBackground, StyleSheet,View,Button,TouchableOpacity,Text } from "react-native"
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
//import { Colors } from "react-native/Libraries/NewAppScreen";
export default ()=>{
    return(
        <View style={MyStyle.container}>
      <Button  title="Button 1" onPress={()=>alert("hello!")}/>
<TouchableOpacity style={MyStyle.Button} onPress={()=> alert("Hello 2")}>
    <Text style={MyStyle.text}>
        Button 2
    </Text>
</TouchableOpacity>
     
        </View>
    )
}
const MyStyle=StyleSheet.create(
    {
        container:{
          //  width:100,
flex:1,
justifyContent:"center"
        },
        Button:{
            Color:"white",
            backgroundColor:"blue",
            marginTop:10,
            alignItems:10,
padding:10,
//width:1000
        },
        StyleText:{

        },
        text:{
            Color:"white",
            fontSize:18,
            textAlign:"center"
        }
    }
)
//export default Project2;