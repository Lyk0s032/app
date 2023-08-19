import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableHighlight, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Question(){
    const { navigate } = useNavigation();
    const [active, setActive] = useState('history');
    return (
        <SafeAreaView style={{marginTop:30,backgroundColor:'white'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between', padding:20}}>
                <TouchableHighlight style={{width:'20%',padding:10,paddingLeft:0}} underlayColor={'white'} activeOpacity={0.7} 
                onPress={() => navigate('DetailsNovax')}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" />
                </TouchableHighlight>
            </View>
            <ScrollView>
                <View style={{marginLeft:'5%',marginTop:20, width:'90%', marginBottom:100}}>
            
                    <Text style={{fontSize:16,color: 'black',marginTop:10, fontWeight:'bold'}}>Preguntas frecuentes</Text>
                    <View style={{marginLeft:'5%',width:'90%'}}>
                        <View style={{marginTop:30}}>
                            <Text style={{fontSize:14,color: 'black', fontWeight:'bold'}}>¿Cada cúanto tiempo realizan juegos?</Text>
                            <Text style={{fontSize:12,color: '#666',marginTop:10}}>
                                Todos los meses se realizan diversos juegos, enfocados a diferentes tipos de públicos.
                            </Text>
                        </View>
                        <View style={{marginTop:30}}>
                            <Text style={{fontSize:14,color: 'black', fontWeight:'bold'}}>¿Puedo crear mi propio equipo de ventas?</Text>
                            <Text style={{fontSize:12,color: '#666',marginTop:10}}>
                                Claro, en NovaX permitimos que nuestros usuarios puedan crear su propio equipo de ventas. El único
                                requisito es ser nivel 3.
                            </Text>
                        </View>

                        <View style={{marginTop:30}}>
                            <Text style={{fontSize:14,color: 'black', fontWeight:'bold'}}>¿Qué significa quedar en el top 3?</Text>
                            <Text style={{fontSize:12,color: '#666',marginTop:10}}>
                                El top 3, el grupo creado por cada sorteo para los usuarios que más ventas realizarón durante el sorteo. 
                                Entrar en el top 3, garantiza tener un premio adicional a las comisiones. Los premios varían de sorteo a sorteo.
                                El monto minimo que se puede ganar en un top 3, es de: Primer puesto: 500.000 COP, Segundo puesto: 300.000 COP. Tercer Puesto: 200.000 COP.

                                Estas son las condiciones minimas que debe garantizar cada sorteo en relación al top 3.
                            </Text>
                        </View>

                        <View style={{marginTop:30}}>
                            <Text style={{fontSize:14,color: 'black', fontWeight:'bold'}}>¿Qué hago si quiero obtener financiación empresarial con NovaX?</Text>
                            <Text style={{fontSize:12,color: '#666',marginTop:10}}>
                                En caso de querer financiación empresarial con NovaX, deberás ser NIVEL 4.
                            </Text>
                        </View>

                    </View>

                    
                    

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