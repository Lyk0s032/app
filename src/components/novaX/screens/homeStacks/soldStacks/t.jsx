import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SmallFacture from './smallFacture';



export default function T(props){
    const { navigate } = useNavigation();
    const usuario = props.usuario;
    const tiquetes = props.tiquetes;
    return (
        <SafeAreaView style={{backgroundColor:'white'}}>
            {/*<View style={{padding:20,backgroundColor: 'white', flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                <TouchableHighlight style={{padding:5}} onPress={() => navigate('SoldNovax')}
                            underlayColor={'white'} activeOpacity={0.7}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableHighlight>
                <Text>TTR 200 SPORT</Text>
                <Text></Text>
                
            </View> */}
            <ScrollView>
                <View style={{marginLeft:'5%',width:'90%'}}>
                    <View style={{marginTop:20}}>
                        <Text style={{fontSize:12,fontWeight:'bold', color: '#666'}}>Buscar tiquete</Text>
                        <TextInput placeholder='Buscar por número de teléfono'
                        style={{marginTop:10, width:'100%',padding:5,borderWidth:1,borderColor:'#ccc',borderRadius:20, paddingLeft:10,fontSize:12}} />
                    </View>

                    <View style={{marginTop:40}}>
                        <Text style={{fontSize:14,color: '#666'}}>Mis tiquetes vendidos</Text>

                        <View style={{marginTop:20}}> 
                            {
                                tiquetes && tiquetes.lotteries[0].vendidos.length ?
                                    tiquetes.lotteries[0].vendidos.map((tiquete, i) => {
                                        return (
                                            <SmallFacture key={i+1} valor={tiquetes.lotteries[0].price} ticket={tiquete} />
                                        )
                                    })
                                :
                                <View>
                                    <Text>No hay tiquetes vendidos</Text>
                                </View>
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}