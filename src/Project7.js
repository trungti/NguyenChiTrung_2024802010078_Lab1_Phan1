import {StyleSheet, ImageBackground, View,Button,TouchableOpacity,Text, ScrollView, TextInput } from "react-native"
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
//import { Colors } from "react-native/Libraries/NewAppScreen";
const styles=StyleSheet.create({
    container:{
        //backgroundColor:"red"
        padding:20
    },
   label:{
    fontWeight:"bold",
    fontSize:18
   }
   ,
   input:{
    marginTop:10,
    backgroundColor:"white",
    padding:10,
    borderRadius:5
   }

});

export default ()=>{
    const[name,setName]=useState("");
    return(
        <View style={styles.container}>
            <Text style={styles.label}>What is your name?</Text>
            <TextInput
            style={styles.input}
            placeholder="Moi nhap ten cua Thầy"
            placeholderTextColor="rgba(0,0,0,0.5)"
            onChangeText={(text)=>setName(text)}
            value={name}
            />
            <Button
            title="Xin chao"
            onPress={()=>{
                alert(`Chao,${name}!`);
                setName("");
            }}
            />
        </View>
    );
};
