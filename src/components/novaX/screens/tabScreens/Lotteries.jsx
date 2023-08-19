import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableHighlight, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function Lotteries(props){
    const usuario = props.usuario;
    const games = props.games;
    const [level, setLevel] = useState(1);
    const { navigate } = useNavigation();
    return (
        <SafeAreaView style={{backgroundColor:'white',marginTop:30}}>
            <ScrollView>
                <View style={{width:'90%',marginLeft:'5%',marginTop:30}}>
                    <Text style={{marginTop:20,fontSize:30,color: 'black'}}>NovaX</Text>
                    <Text style={{fontSize:12,color: '#ccc'}}>Algunos de nuestros sorteos {usuario.name.split(' ')[0]} </Text>
                </View>
                <View style={{marginTop:20,width:'90%',marginLeft:'5%'}}>
                    <View style={{marginTop:10,marginBottom:20}}>
                        <Text style={{fontSize:12,textAlign:'left'}}>Filtrar por rangos</Text>
                    </View>
                    <ScrollView horizontal style={{padding:10}}>
                        <TouchableHighlight onPress={() => {
                            setLevel(1)
                        }} activeOpacity={0.7} underlayColor={'white'} style={level == 1 ? {padding:10,borderRadius:5,backgroundColor:'black',marginRight:10} : {padding:10,borderRadius:5,marginRight:10}}>
                            <Text style={level == 1 ? {fontSize:12,color: 'white'} : {fontSize:12,color: '#666'}}>Nivel 1</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => {
                            setLevel(2)
                        }} activeOpacity={0.7} underlayColor={'white'} style={level == 2 ? {padding:10,borderRadius:5,backgroundColor:'black',marginRight:10} : {padding:10,borderRadius:5,marginRight:10}}>
                            <Text style={level == 2 ? {fontSize:12,color: 'white'} : {fontSize:12,color: '#666'}}>Nivel 2</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => {
                            setLevel(3)
                        }} activeOpacity={0.7} underlayColor={'white'} style={level == 3 ? {padding:10,borderRadius:5,backgroundColor:'black',marginRight:10} : {padding:10,borderRadius:5,marginRight:10}}>
                            <Text style={level == 3 ? {fontSize:12,color: 'white'} : {fontSize:12,color: '#666'}}>Nivel 3</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => {
                            setLevel(4)
                        }} activeOpacity={0.7} underlayColor={'white'} style={level == 4 ? {padding:10,borderRadius:5,backgroundColor:'black',marginRight:10} : {padding:10,borderRadius:5,marginRight:10}}>
                            <Text style={level == 4 ? {fontSize:12,color: 'white'} : {fontSize:12,color: '#666'}}>Nivel 4</Text>
                        </TouchableHighlight>
                        

                    </ScrollView>
                </View>
                <View style={{marginLeft:'5%',width:'90%',marginTop:30}}>
                    
                    {
                        games && games.games && games.games.length ?
                        games.games.map((game,i) => {
                            if(game.nivel == level){
                                return(
                                    <View key={i+1} style={{width:'100%',borderRadius:20,padding:10,backgroundColor:'rgb(232, 240, 254)',height:200, marginBottom:10}}>
                                        <View style={{width:'100%',height:'100%', flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                                            <View style={{width:'40%'}}>
                                                <Image source={{uri:`${game.img}`}}
                                                style={{width:'100%',height:'100%'}} resizeMode="contain" />
    
                                            </View>
                                            <View style={{width:'55%',marginLeft:'5%'}}>
                                                <Text style={{fontSize:14,color: 'black',fontWeight:'bold'}}>{game.name}</Text>
                                                <Text style={{fontSize:12,color: '#ccc',marginTop:5}}>
                                                    {
                                                    `${game.start.split('T')[0].split('-')[0]} de ${game.start.split('T')[0].split('-')[1]} - ${game.finish.split('T')[0].split('-')[0]} de ${game.finish.split('T')[0].split('-')[1]}` }
    
                                                </Text>
                                                <Text style={{fontSize:12,color: '#ccc',marginTop:5,fontWeight:'bold'}}>Nivel 1</Text>
    
                                                <View  style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
                                                    <TouchableHighlight style={{width:'48%',padding:10,backgroundColor:'transparent',borderRadius:5}}
                                                    onPress={() => {
                                                        navigate('LotteryNovax', {gameData: game})
                                                    }} underlayColor={'#ccc'} activeOpacity={0.7}>
                                                            <Text style={{fontSize:12,color: '#666',textAlign:'center'}}>Detalles</Text>
                                                    </TouchableHighlight>
                                                    <TouchableHighlight style={{width:'48%', backgroundColor: 'black',padding:10, borderRadius:5}}
                                                     onPress={() => navigate('LotteryNovax', {gameData: game})} underlayColor={'#ccc'} activeOpacity={0.7}>
                                                            <Text style={{fontSize:12,color: 'white',textAlign:'center'}}>Inscribirse</Text>
                                                    </TouchableHighlight>
                                                </View>
                                            </View>
                                        </View>
                                        
                                    </View>
                                )
                            }
                            
                        })
                        : <Text>No hay juegos</Text>
                    }
                

                </View>
                <View style={{width:'96%',marginLeft:'2%',marginTop:60}}>
                    <View style={{marginTop:50,alignItems:'center', width:'90%',marginLeft:'5%',marginBottom:20}}>
                        <Image source={require('../../../../assets/img/NovaX.png')} style={{width:'50%'}}
                        resizeMode="contain" />
                        <Text style={{fontSize:12}}>Más allá de la suerte, diseñando el futuro.</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}