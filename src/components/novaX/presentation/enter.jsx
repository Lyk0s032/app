import React from "react";
import { Image, Text, View } from "react-native";

export default function Presentation(){
    return (
        <View style={{height:'100%', backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
            <Image source={require('./../../../assets/img/NovaX.png')}  style={{width:'100%', height:400}} resizeMode="contain"  />
            <View style={{}}>
                <Text style={{fontWeight:'bold'}}>Accediendo...</Text>
            </View>
        </View>
    )
}