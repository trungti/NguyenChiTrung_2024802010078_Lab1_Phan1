import {StyleSheet, ImageBackground, View,Button,TouchableOpacity,Text, ScrollView } from "react-native"
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
//import { Colors } from "react-native/Libraries/NewAppScreen";
const styles=StyleSheet.create({
    container:{
        backgroundColor:"white"
    },
    box:{
        width:100,
        height:100,
        justifyContent:"center",
        alignItems:"center",
        margin:20
    },

});
const Square=({text,bgColor="blue"})=>(
    <View style={[styles.box,{backgroundColor:bgColor}]}>
        <text>{text}</text>
    </View>

);
const data=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
export default ()=>{
    return(
        <ScrollView style={
            styles.container}>
        {data.map((item,index)=>(
            <Square key={item} text={`Square ${index +1}`}/>
        ))}
        </ScrollView>
    );
};
