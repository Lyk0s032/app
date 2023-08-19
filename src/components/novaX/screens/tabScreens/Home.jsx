import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, KeyboardAvoidingView,SafeAreaView, ScrollView, Text, TextInput, TouchableHighlight, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Modal from "react-native-modal";
import Game from "./modalsHome/game";
import Seller from "./modalsHome/seller";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
import * as actions from './../../../../store/actions/actions';
import GameActive from "./gameActive";
import Game404 from "./recursos/404Game";

export default function Home(props){
    const { navigate } = useNavigation();
    const myGames = props.myGames;  // Mis juegos e información más completa
    const usuario = props.usuario;  // Usuario info general
    const loading = props.loading;  // Cargando el componente para mostrar los games

    return (
        <SafeAreaView style={{backgroundColor:'white',marginTop:30}}>
            <ScrollView>
                <View style={{width:'50%',marginLeft:'25%',marginTop:30, alignItems:'center'}}>
                    <Text style={{marginTop:20,fontSize:40,color: 'black'}}>NovaX</Text>
                    <View style={{width:'100%',marginTop:50}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            
                            <TouchableHighlight style={{alignItems:'center'}} onPress={() => navigate('StackSoldNovax')} activeOpacity={0.7} underlayColor={'white'}>   
                                <View style={{alignItems:'center'}}>
                                    <FontAwesome name="dollar" size={24} color="black" />                           
                                    <Text style={{marginTop:10,fontSize:12}}>Mis ventas</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight style={{alignItems:'center'}} onPress={() => navigate('StackGameNovax')} activeOpacity={0.7} underlayColor={'white'}>   
                                <View style={{alignItems:'center'}}>  
                                    <Ionicons name="game-controller-outline" size={24} color="black" />                          
                                    <Text style={{marginTop:10,fontSize:12}}>Sorteos</Text>
                                </View>
                            </TouchableHighlight>

                        </View>
                    </View>
                </View>
                {

                myGames && loading == false ?
                <View style={{width:'96%',marginLeft:'2%',marginTop:60}}>
                    {
                        console.log(myGames)
                    }
                    <View style={{width:'100%',marginLeft:'5%',width:'90%'}}>
                        <Text style={{fontSize:12,color:'#666'}}>¡Hola, {usuario.name.split(' ')[0]}!</Text>
                        <Text style={{fontSize:14,fontWeight:'bold'}}>Juegos disponibles</Text>
                    </View>
                    <View>
                        {
                            myGames == 404 || !myGames.lotteries.length ?
                            <Game404 />
                                :
                            <GameActive game={myGames} usuario={usuario} />
                        }
                    </View>
                    <View style={{marginTop:50,alignItems:'center', width:'90%',marginLeft:'5%',marginBottom:20}}>
                        <Image source={require('../../../../assets/img/NovaX.png')} style={{width:'50%'}} resizeMode="contain" />
                    
                        <Text style={{fontSize:12}}>Más allá de la suerte, diseñando el futuro.</Text>
                    </View>
                </View>
                : 
                <View>
                    <Text style={{fontSize:40}}>Cargando...</Text>
                </View>

                }
            </ScrollView>
            

            


 
        </SafeAreaView>
    )
}