import React from "react";
import { Text, View } from "react-native";

export default function Game404(){
    return (
        <View style={{marginTop:50, alignItems:'center'}}>
            <View style={{borderRadius:1000,borderWidth:.3,width:250,height:250, alignItems:'center', justifyContent:'space-around'}}>
                <View style={{alignItems:'center', width:'50%'}}>
                    <Text style={{fontSize:50}}>
                        ?
                    </Text>
                    <Text style={{marginTop:20, textAlign:'center', fontWeight:100}}>No has seleccionado ningun sorteo.</Text>
                </View>
            </View>
        </View>
    )
}