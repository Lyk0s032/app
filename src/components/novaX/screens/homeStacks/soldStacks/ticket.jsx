import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function Ticket(props){
    const usuario = props.usuario;
    const gameSelected = props.gameSelected;
    const { lotteries } = gameSelected;
    const { navigate } = useNavigation();
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
                <View style={{width:'90%',marginLeft:'5%', marginTop:20,paddingBottom:10}}>
                    <View style={{marginTop:10, alignItems:'center'}}>
                    <Image source={{uri: lotteries[0].img}} 
                    style={{width:'50%', height:100,
                        borderRadius:5}}
                        resizeMode='contain' />
                    </View>
                </View>
                <View style={{marginLeft:'5%',width:'90%',marginTop:40}}>
                    <Text style={{fontSize:14,fontWeight:'bold',color: '#666'}}>Sorteo</Text>
                    <View style={{marginTop:30}}>
                        <Text style={{fontSize:26,fontWeight:100}}>{lotteries[0].name}</Text>
                        <Text style={{fontSize:12, color: '#666',fontWeight:100,marginTop:10}}>Referencia: <Text>{lotteries[0].id}{lotteries[0].img.split('').length ** lotteries[0].id}</Text></Text>
                        <Text style={{fontSize:12,color: 'black',marginTop:10}}>{lotteries[0].name}</Text>
                        <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                            <Text style={{fontSize:12}}>Estado</Text>
                            <Text style={{fontSize:14,fontWeight:'bold'}}>
                                { 
                                    lotteries[0].state == 'finish' || lotteries[0].winner ?
                                    'Finalizó'
                                    :
                                    'Abierto'
                                }
                            </Text>
                        </View>

                    </View>

                    <Text style={{fontWeight:'bold',color: '#666', marginTop:50}}>Mis detalles de venta</Text>
                    <View style={{marginTop:30, width:'90%', marginLeft:'5%'}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                            <Text style={{fontSize:12}}>Mis tickets vendidos</Text>
                            <Text style={{fontSize:14,fontWeight:100}}>{lotteries[0].numeros.length}</Text>
                        </View>
                        <View style={{flexDirection:'row',marginTop:20, justifyContent:'space-between', alignItems:'center'}}>
                            <Text style={{fontSize:12}}>Puntos conseguidos</Text>
                            <Text style={{fontSize:12,fontWeight:'bold',fontStyle:'italic'}}>{new Intl.NumberFormat().format(lotteries[0].numeros.length * 500)}</Text>
                        </View>
                        <View style={{flexDirection:'row',marginTop:20, justifyContent:'space-between', alignItems:'center'}}>
                            <Text style={{fontSize:12}}>Mi comisión</Text>
                            <Text style={{fontSize:12,fontWeight:'bold',fontStyle:'italic'}}>{new Intl.NumberFormat().format(lotteries[0].numeros.length * Number(lotteries[0].comision))} COP</Text>
                        </View>
                    </View>


                    <Text style={{fontWeight:'bold',fontSize:20, color: '#666', marginTop:100}}>¡Premios!</Text>

                    <View style={{marginTop:30, width:'90%', marginLeft:'5%'}}>
                        <Text style={{marginTop:20,fontSize:12,color: '#666'}}>Premio por posición</Text>
                        
                        <View style={{marginTop:20, flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                            <Text style={{fontSize:12}}>Mi posición</Text>
                            <Text style={{fontSize:14,fontWeight:100}}>#4 / 100</Text>
                        </View>
        
                    </View>

                    <View style={{marginTop:30, width:'90%', marginLeft:'5%'}}>
                        <Text style={{marginTop:20,fontSize:12,color: '#666'}}>Premio por vender número ganador</Text>
                        {
                        lotteries[0].winner || lotteries[0].state == 'finish' ?
                            lotteries[0].numeros.includes(lotteries[0].winner) ?
                            <View style={{marginTop:20}}>
                                <Text style={{fontSize:18,fontWeight:'100'}}>¡Felicitaciones! has vendido el número ganador.</Text>
                                <TouchableHighlight style={{padding:10,borderRadius:5,borderWidth:1,borderColor:'black', marginTop:20, alignItems:'center'}}>
                                    <Text style={{fontSize:22,fontWeight:'300',color: 'black'}}>¡Ver mi premio!</Text>
                                </TouchableHighlight>
                            </View>
                            :
                            <View style={{marginTop:20}}>
                                <Text style={{fontSize:18,fontWeight:'100'}}>En esta ocasión no has vendido el número ganador.</Text>
                                <Text style={{fontSize:22,fontWeight:'300',marginTop:20}}>¡Sigue intentado!</Text>
                            </View>
                        :
                            <View style={{marginTop:20}}>
                                <Text style={{fontSize:22,fontWeight:'300',marginTop:20}}>¡No ha finalizado el sorteo!</Text>
                            </View>
                        }
                       
        
                    </View>
                </View>
                <View style={{marginTop:100,marginBottom:150}}>
                    <Image source={require('./../../../../../assets/img/NovaX.png')} style={{marginLeft: '25%',width:'50%',height:200}} 
                    resizeMode='contain' />
                    <Text style={{fontSize:12,color: '#666', textAlign:'center'}}>Más allá de la suerte, diseñando el futuro.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}