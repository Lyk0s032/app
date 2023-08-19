import React, { useState } from "react";
import { Text, View } from "react-native";

export default function Puntos(props){
    const profile = props.profile;

    const [porcentaje, setPorcentaje] = useState(
        profile.res.nivel == 1 ? `${Number(Number(profile.res.puntos) / Number(100000)) * 100}%`
        :
        profile.res.nivel == 2 ? `${Number(Number(profile.res.puntos) / Number(400000)) * 100}%`
        :
        profile.res.nivel == 3 ? `${Number(Number(profile.res.puntos) / Number(1000000)) * 100}%`
        : null
    )
    return (
        <View>
           
            <View style={{marginTop:30}}>
              
                {
                    profile.res.nivel  == 1  ? 
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{fontSize:12,color: '#666'}}>Nivel 1</Text>
                        <View style={{alignContent:'flex-start'}}>
                        <Text style={{fontSize:12,color: '#ccc'}}>Nivel 2</Text>
                        <Text style={{fontSize:12,color: '#ccc'}}>(100.000)</Text>
                        </View> 
    
                    </View>
                    :  profile.res.nivel  == 2 ? 
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{fontSize:12,color: '#666'}}>Nivel 2</Text>
                        <View style={{alignContent:'flex-start'}}>
                        <Text style={{fontSize:12,color: '#ccc'}}>Nivel 3</Text>
                        <Text style={{fontSize:12,color: '#ccc'}}>(400.000)</Text>
                        </View> 
                    </View>
                    :  profile.res.nivel  == 3 ? 
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{fontSize:12,color: '#666'}}>Nivel 3</Text>
                        <View style={{alignContent:'flex-start'}}>
                        <Text style={{fontSize:12,color: '#ccc'}}>Nivel 4</Text>
                        <Text style={{fontSize:12,color: '#ccc'}}>(1.000.000)</Text>
                        </View> 
                    </View>
                    :  null
                }
                <View style={{width:'100%',marginTop:10, backgroundColor: '#EEE',borderRadius:10}}>
                    <View style={{width:porcentaje,backgroundColor:'black',borderRadius:10,alignItems:'flex-end'}}>
                        <View style={{borderRadius:1000, width: '5%',padding:5, backgroundColor:'white'}}></View>
                    </View>
                </View>
            </View>
            
            
        </View>
    )
}