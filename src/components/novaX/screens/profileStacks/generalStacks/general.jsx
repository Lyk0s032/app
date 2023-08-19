import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableHighlight, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default function General(){
    const { navigate } = useNavigation();
    const [active, setActive] = useState('history');

    const usuario = useSelector(store => store.usuario.user)
    return (
        <SafeAreaView style={{marginTop:30,backgroundColor:'white'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between', padding:20}}>
                <TouchableHighlight style={{width:'20%',padding:10,paddingLeft:0}} underlayColor={'white'} activeOpacity={0.7} 
                onPress={() => navigate('DetailsNovax')}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" />
                </TouchableHighlight>
            </View>
            <ScrollView>
                <View style={{marginLeft:'5%',width:'90%', marginBottom:100}}>
                    <Text style={{fontSize:16,color: 'black',marginTop:10, fontWeight:'bold'}}>Detalles generales</Text>
                    <View style={{marginTop:30, width:'90%',marginLeft:'10%',alignItems:'center'}}>
                        <View style={{width:'100%',alignItems:'center'}}>
                            <Text style={{fontSize:14}}>
                                Avatar
                            </Text>
                            <Image source={{uri: `http:192.168.100.12:3000/app/avatars/read/profile/${usuario.imgProfile}`}}  style={{width:'50%',height:200}} resizeMode="contain" />
                        </View>
                    </View>
                    <View style={{marginTop:30, width:'90%',marginLeft:'10%'}}>
                        <View>
                            <Text style={{fontSize:14}}>
                                Nombre completo
                            </Text>
                            <Text style={{fontSize:12,color: '#666',marginTop:5,fontStyle:'italic'}}>{`${usuario.name} ${usuario.lastName}`} </Text>
                        </View>
                    </View>
                    <View style={{marginTop:30, width:'90%',marginLeft:'10%'}}>
                        <View>
                            <Text style={{fontSize:14}}>
                                Nro tarjeta
                            </Text>
                            <Text style={{fontSize:12,color: '#666',marginTop:5,fontStyle:'italic'}}>{`${usuario.movil}`}</Text>
                        </View>
                    </View>
                    <TouchableHighlight style={{marginTop:30, width:'90%',marginLeft:'10%'}} onPress={() => navigate('ChangePasswordDetails')} 
                        underlayColor={'white'} activeOpacity={0.7} >
                        <View>
                            <Text style={{fontSize:14}}>
                                Contraseña
                            </Text>
                            <Text style={{fontSize:12,color: '#666',marginTop:5,fontStyle:'italic'}}>*** *** *** </Text>
                        </View>
                    </TouchableHighlight>

                    <View style={{marginTop:60}}>
                        <Text style={{fontSize:12,color: '#666', textAlign:'center'}}>
                            Más allá de la suerte, diseñando el futuro.
                        </Text>
                    </View>
                </View>
            </ScrollView> 
        </SafeAreaView>
    )
}