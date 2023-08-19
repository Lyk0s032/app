import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoadingGame(props){
    const { navigate } = useNavigation();

    return (
        <SafeAreaView style={{backgroundColor:'white'}}>
   
            <View style={{marginTop:30, padding:20,backgroundColor: 'white', flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                <TouchableHighlight style={{padding:5}} onPress={() => navigate('HomeNovax')}
                            underlayColor={'white'} activeOpacity={0.7}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableHighlight>
                <Text>Mis sorteos</Text>
                <TouchableHighlight>
                    <Ionicons name="menu-outline" size={24} color="black" />
                </TouchableHighlight>
                
            </View>
            <ScrollView style={{paddingBottom:150}}>
                <View style={{width:'90%',marginLeft:'5%', marginTop:20,paddingBottom:10}}>
                    <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{width:'50%', alignItems:'center'}}>
                            <Image source={{uri: 'https://i.pinimg.com/originals/6d/0e/05/6d0e052a59840858186a37ba74de24b3.png'}}  
                            style={{width:'70%',height:100}} resizeMode="contain" />
                        </View>
                        <View style={{width:'50%'}}> 
                            <Text style={{fontWeight:'bold'}}>Cargando...</Text>
                            <Text style={{fontSize:12,color: '#666'}}>Sorteos en los que he participado y mi nivel.</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{padding:10, marginTop:20, flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                            <TouchableHighlight style={{width:'30%'}} >
                                <View style={{alignItems:'center'}}>
                                    <Text style={{fontWeight:'bold', fontStyle:'italic'}}>1</Text>
                                    <Text style={{fontSize:12,color: '#666',textAlign:'center'}}>Sorteos activos</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={{width:'30%'}} >
                                <View style={{alignItems:'center'}}>
                                    <Text style={{fontWeight:'bold', fontStyle:'italic'}}>1</Text>
                                    <Text style={{fontSize:12,color: '#666'}}>Total</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={{width:'30%'}} >
                                <View style={{alignItems:'center'}}>
                                    <Text style={{fontWeight:'bold', fontStyle:'italic'}}>1</Text>
                                    <Text style={{fontSize:12,color: '#666'}}>Mi nivel</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{marginTop:20}}>
                        <Text style={{marginTop:20,fontSize:12, color: '#666' }}>Sorteos</Text>
                        <View style={{marginTop:40}}>
                            
                            <View>
                                <Text>No hay sorteos aun.</Text>
                            </View>
                            

                           
                        </View>
                    </View>

                    <View style={{marginTop:100,marginBottom:150}}>
                        <Image source={require('./../../../../../../assets/img/NovaX.png')} style={{marginLeft: '25%',width:'50%',height:200}} 
                        resizeMode='contain' />
                        <Text style={{fontSize:12,color: '#666', textAlign:'center'}}>Más allá de la suerte, diseñando el futuro.</Text>
                    </View>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}