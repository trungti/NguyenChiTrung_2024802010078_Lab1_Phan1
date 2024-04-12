import {StyleSheet,ImageBackground, View,Button,TouchableOpacity,Text } from "react-native"
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
//import { Colors } from "react-native/Libraries/NewAppScreen";
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-around",
    },
    box:{
        width:100,
        height:100,
        justifyContent:"center",
        alignItems:"center"
    },

});
const Square=({text,bgColor="blue"})=>(
    <View style={[styles.box,{backgroundColor:bgColor}]}>
        <text>{text}</text>
    </View>

);
export default ()=>{
    return(
        <View style={styles.container}>
            <Square text="Square 1"/>
            <Square text="Square 2" bgColor="red"/>
            <Square text="Square 3" bgColor="yellow"/>
        </View>
    );
};
