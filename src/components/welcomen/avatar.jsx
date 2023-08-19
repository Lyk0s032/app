import React from "react";
import { Image, View } from "react-native";

export default function Avat(props){
    const img = props.avatar;
    // const data = require(`${ruta}`);
    return (
        <View style={{width:'30%', padding:10,marginRight:10,borderWidth:.3,borderColor:'#ccc',borderRadius:5,marginBottom:20}}>

                <Image source={{ uri: `http:192.168.100.12:3000/app/avatars/read/profile/${img}` }}
                 style={{width:'100%', height:100}} resizeMode="contain" />

        </View> 
    )
}