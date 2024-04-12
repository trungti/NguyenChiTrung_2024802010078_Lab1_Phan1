import {StyleSheet, ImageBackground, View,Button,TouchableOpacity,Text, ScrollView, TextInput, SafeAreaView, SectionList, _View } from "react-native"
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
//import { Colors } from "react-native/Libraries/NewAppScreen";
const styles=StyleSheet.create({
  row:{
    paddingHorizontal:10,
    paddingVertical:10,
  },
  name:{
    fontSize:16,
  },
  separator:{
    backgroundColor:"rgba(0,0,0,0.5)",
    height:1,
  },
  sectionHeader:{
    paddingHorizontal:10,
    paddingVertical:10,
    backgroundColor:"rgb(170,170,170))",
  },


});

const groupPeopleByLastName=(_data)=>{
    const data=[..._data];
    const  groupData=data.reduce((accumulator,item)=>{
        const group=item.name.last[0].toUpperCase();
        if(accumulator[group]){
            accumulator[group].data.push(item);
        } else{
            accumulator[group]={
                title:group,
                data:[item],
            };
        }
        return accumulator;
    },{});
    const sections=Object.keys(groupData).map((key)=>{
        return groupData[key];
    
    });
    return sections.sort((a,b)=>{
        if(a.title>b.title){
            return 1;
        }
        return -1;
    });
};
export default ()=>{
    const[name,setName]=useState("");
    return(
        <SafeAreaView>
            <SectionList
                sections={groupPeopleByLastName(PEOPLE)}
                keyExtractor={(item)=>`${item.name.first}-${item.name.last}`}
renderSectionHeader={({section})=>{
    return(
        <View style={styles.sectionHeader}>
        <Text>{section.title}</Text>
        </View>
    );
    }}
renderItem={({item})=>{
    return(
        <View style={styles.row}>
            <Text style={styles.name}>
                {item.name.first} {item.name.last}
            </Text>
        </View>
    );
}}
ItemSeparatorComponent={()=><View style={styles.separator}/>} 
/></SafeAreaView>   
);
};
const PEOPLE=[
    {
        name:{
            title:"Ms",
            first:"Trung",
            last:"D20CNTT03",
        },
    },
   {
        name:{
            title:"Ms",
            first:"Nam",
            last:"D20CNTT01",
        },
    },
    {
        name:{
            title:"Ms",
            first:"Trang",
            last:"D20CNTT03",
        },
    },
    {
        name:{
            title:"Ms",
            first:"Thiện",
            last:"D20CNTT03",
        },
    },
   {
        name:{
            title:"Ms",
            first:"Thuận",
            last:"D20CNTT03",
        },
    },
    {
        name:{
            title:"Ms",
            first:"Toàn",
            last:"D20CNTT04",
        },
    }
];
