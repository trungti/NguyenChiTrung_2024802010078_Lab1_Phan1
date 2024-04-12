import { ImageBackground, View,Button,TouchableOpacity,Text } from "react-native"
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
//import { Colors } from "react-native/Libraries/NewAppScreen";

export default ()=>{
    const[pressCount,setPressCount]=useState(0);
    return(
    <View style={{flex:1,justifyContent:"center"}}>
       <Text>You've pressed the button:{pressCount} time(s)</Text>
       <Button
       title={'Pressed ${pressCount} time(s)'}
       onPress={()=>setPressCount(pressCount+1)}
       />
    </View>
);
};
