import { StyleSheet, ImageBackground, View, Button, TouchableOpacity, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";

const ButtonComponent = (props) => (
    <TouchableOpacity
        onPress={props.onPress}
        style={{
            backgroundColor: props.backgroundColor || "red",
            alignSelf: "center",
            padding: 20, // Điều chỉnh kích thước padding nếu cần thiết
            marginVertical: 10, // Điều chỉnh khoảng cách dọc giữa các nút button
            ...props.buttonStyle,
        }}>
        <Text style={{ color: "white" }}>{props.text}</Text>
    </TouchableOpacity>
);

export default () => (
    <View style={{ flex: 1, justifyContent: "center" }}>
        <ButtonComponent text="Say Hello" onPress={() => alert("hello!")} />
        <ButtonComponent text="Say Goodbye" onPress={() => alert("goodbye!")} backgroundColor="blue" />
    </View>
);
