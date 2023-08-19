import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableHighlight, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Languague(){
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
                <View style={{marginLeft:'5%',width:'90%', marginBottom:100}}>
                    <Text style={{fontSize:16,color: 'black',marginTop:10, fontWeight:'bold'}}>Idiomas</Text>
                    <Text style={{fontSize:12,color: '#666',marginTop:10}}>
                        Nos permitimos informarle que por el momento, la aplicación de NovaX solamente se encuentra disponible en Español.
                    </Text>

                    <Text style={{fontSize:12,color: '#666',marginTop:10}}>Esperamos muy prontamente agregar más idiomas a nuestra aplicacion.</Text>
                    

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