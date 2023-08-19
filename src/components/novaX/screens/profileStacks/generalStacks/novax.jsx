import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableHighlight, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function NovaxDetails(){
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
                    <Image source={require('./../../../../../assets/img/NovaX.png') } style={{width:'100%',height:200}}
                    resizeMode="contain"  /> 
                    <Text style={{fontSize:16,color: 'black',marginTop:10, fontWeight:'bold'}}>NovaX</Text>
                    <Text style={{fontSize:12,color: '#666',marginTop:10}}>
                       
                        En NovaX, nos sumergimos en el emocionante mundo del azar y la financiación empresarial.
                        Somos un innovador punto de encuentro donde la suerte se une con el espíritu emprendedor.
                        Nuestro objetivo principal es recaudar fondos para impulsar el crecimiento de empresas, proporcionando
                        a nuestros jugadores la oportunidad de ganar grandes premios mientras apoyan proyectos empresariales. 
                        Con juegos apasionante, un enfoque transparente y la emoción de las posibilidades infinitas, NovaX ofrece
                        una experiencia única que combina la diversión del azar con el propósito de fomentar el éxito empresarial.
                    </Text>

                    <Text style={{fontSize:16,color: 'black',marginTop:30, fontWeight:'bold'}}>Misión</Text>
                    <Text style={{fontSize:12,color: '#666',marginTop:10}}>
                        Facilitar oportunidades de éxito empresarial a través del azar.
                    </Text>

                    <Text style={{fontSize:16,color: 'black',marginTop:30, fontWeight:'bold'}}>Visión</Text>
                    <Text style={{fontSize:12,color: '#666',marginTop:10}}>
                        Inspirar  millones de emprendedores a través de nuestras oportunidades de azar.
                    </Text>

                    
                    

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