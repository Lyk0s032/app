import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableHighlight, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Contact(){
    const { navigate } = useNavigation();
    const [active, setActive] = useState('history');
    return (
        <SafeAreaView style={{marginTop:30,backgroundColor:'white',height:'100%'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between', padding:20}}>
                <TouchableHighlight style={{width:'20%',padding:10,paddingLeft:0}} underlayColor={'white'} activeOpacity={0.7} 
                onPress={() => navigate('DetailsNovax')}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" />
                </TouchableHighlight>
            </View>
            <ScrollView>
                <View style={{marginLeft:'5%',marginTop:20, width:'90%', marginBottom:100}}>
                    <Text style={{fontSize:16,color: 'black',marginTop:10, fontWeight:'bold'}}>Comunicate con nosotros</Text>
                    <Text style={{fontSize:12,color: '#666',marginTop:10}}>
                        Puedes comunicarte con nuestro equipo de asesores en caso de problema e inquietudes a la siguiente linea de atención.
                    </Text>
                    <Text style={{marginTop:10,color: 'black',fontSize:12,fontWeight:'bold'}}>
                        (602) 4371651
                    </Text>

                    <Text style={{fontSize:12,color: '#666',marginTop:10}}>O también puedes escribirnos a través de WhatsApp</Text>
                    <TouchableHighlight style={{padding:10,width:'50%', borderWidth:1,borderRadius:5,borderColor:'#ccc',marginTop:40}}>
                        <Text style={{color: '#666',fontSize:14,textAlign:'center'}}>WhatsApp</Text>
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