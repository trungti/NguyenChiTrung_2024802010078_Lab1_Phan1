import { ImageBackground, StyleSheet, Text, View } from "react-native"
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
const Project1=()=>{
    return(
        <View style={MyStyle.StyleView}>
            <Text style={MyStyle.StyleText}
        >

Hello World


        </Text>
        </View>
    )
}
var MyStyle=StyleSheet.create(
    {
        StyleView:{
//BackgroundColor:"red"
width:100,
height:100,
backgroundColor:'aqua',
alignItems:"center",
justifyContent:'center',
        },
        StyleText:{
            color:'black'
        }
    }
)
export default Project1;