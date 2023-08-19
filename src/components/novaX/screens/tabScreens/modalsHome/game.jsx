import React, { useState } from "react";
import { Image, Text, ScrollView, TouchableHighlight, View, SafeAreaView } from "react-native";

export default function Game(props){
    const sorteo = props.sorteo;
    const usuario = props.usuario;
    const { lotteries } = sorteo;
    const [images, setImages] = useState(sorteo.lotteries[0].img)
    return (
            <SafeAreaView >
                <ScrollView style={{width:'100%'}}>
                    <View style={{width:'90%',marginLeft:'5%',marginBottom:150}}>
                        <View style={{width:'100%'}}>
                            <Image source={{uri: images}}
                            style={{width:'100%', height:300}} resizeMode="contain"/>
                        </View>
                        <View style={{width:'80%',marginLeft:'10%'}}>
                            <ScrollView horizontal style={{width:'100%'}}>
                                <TouchableHighlight onPress={() => setImages(sorteo.lotteries[0].img)} activeOpacity={0.7} underlayColor={'white'} style={{width:50, height:50,marginRight:5,borderRadius:5}}>
                                    <Image source={{uri: sorteo.lotteries[0].img}} 
                                    style={{width:50, height:50}} resizeMode="contain"/>
                                </TouchableHighlight >
                                
                                {
                                    sorteo.lotteries[0].imagenes.length ? 
                                    sorteo.lotteries[0].imagenes.map((imagen,i) => {
                                        return (
                                            <TouchableHighlight key={i+1} onPress={() => setImages(imagen.img)} style={{width:50, height:50,marginRight:5, borderRadius:5}} underlayColor={'white'} activeOpacity={0.7}>
                                                <Image source={{uri: imagen.img}} 
                                                style={{width:50, height:50}} resizeMode="contain"/>
                                            </TouchableHighlight >
                                        )
                                    })
                                    :null
                                }
                                
                            </ScrollView>
                        </View>
                        <View style={{marginTop:30}}>
                            <Text style={{fontSize:24,fontWeight:'300'}}>{lotteries[0].name}</Text>
                            <Text style={{fontSize:13,color: '#ccc',marginTop:10}}>{lotteries[0].description}</Text>
                        </View>
                        {
                            lotteries[0].winner || lotteries[0].state == 'finish' ?
                            
                            <View style={{marginTop:30}}>
                                <Text style={{fontWeight:'bold',color: '#666'}}>¡Nro ganador!</Text>
                                <View style={{width:'90%',marginLeft:'5%', flexDirection:'row',justifyContent:'space-between',alignItems:'center', marginTop:30}}>
                                    {
                                        lotteries[0].winner.split('').map((numerito, i) => {
                                            return (
                                                <View key={i+1} style={{padding:10,borderBottomWidth:1, borderColor:'#ccc',width:'20%'}}>
                                                    <Text style={{fontSize:30,fontWeight:'bold',color: '#ccc',textAlign:'center'}}>{numerito} </Text>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            </View>
                            :
                            <View style={{marginTop:30}}>
                                <Text style={{fontWeight:'bold',color: '#666'}}>Nro ganador</Text>
                                <View style={{width:'90%',marginLeft:'5%', flexDirection:'row',justifyContent:'space-between',alignItems:'center', marginTop:30}}>
                                    <View style={{padding:10,borderBottomWidth:1, borderColor:'#ccc',width:'20%'}}>
                                        <Text style={{fontSize:30,fontWeight:'bold',color: '#ccc',textAlign:'center'}}> ? </Text>
                                    </View>
                                    <View style={{padding:10,borderBottomWidth:1, borderColor:'#ccc',width:'20%'}}>
                                        <Text style={{fontSize:30,fontWeight:'bold',color: '#ccc',textAlign:'center'}}> ? </Text>
                                    </View>
                                    <View style={{padding:10,borderBottomWidth:1, borderColor:'#ccc',width:'20%'}}>
                                        <Text style={{fontSize:30,fontWeight:'bold',color: '#ccc',textAlign:'center'}}> ? </Text>
                                    </View>
                                    <View style={{padding:10,borderBottomWidth:1, borderColor:'#ccc',width:'20%'}}>
                                        <Text style={{fontSize:30,fontWeight:'bold',color: '#ccc',textAlign:'center'}}> ? </Text>
                                    </View>
                                </View>
                            </View>


                        }
                        <View style={{marginTop:50}}>
                            <Text style={{fontWeight:'bold'}}>
                                Detalles del sorteo
                            </Text>
                            <View style={{marginTop:30}}>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                                    <Text style={{fontSize:12}}>Día del sorteo:</Text>
                                    <Text style={{fontSize:18,fontWeight:100}}>{`${lotteries[0].finish.split('-')[1]} de ${new Date(`${lotteries[0].finish.split('-')[2]}-${lotteries[0].finish.split('-')[1] }-3`).toLocaleString('default', { month: 'long' })}`}</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                                    <Text style={{fontSize:12}}>Juega con:</Text>
                                    <Text style={{fontSize:18,fontWeight:100}}>{`${lotteries[0].playWith}`}</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                                    <Text style={{fontSize:12}}>Valor Tiquete:</Text>
                                    <Text style={{fontSize:18,fontWeight:100}}>{`${new Intl.NumberFormat().format(lotteries[0].price)}`} COP</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                                    <Text style={{fontSize:12}}>Empresa responsable</Text>
                                    <Text style={{fontSize:18,fontWeight:100}}>NovaX</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                                    <Text style={{fontSize:12}}>Nro posibles ganadores</Text>
                                    <Text style={{fontSize:18,fontWeight:100}}>Ilimitado</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                                    <Text style={{fontSize:12}}>Cantidad de Nros</Text>
                                    <Text style={{fontSize:18,fontWeight:100}}>4</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                                    <Text style={{fontSize:12}}>Estado</Text>
                                    <Text style={{fontSize:12,fontWeight:100}}>
                                        {
                                            lotteries[0].winner || lotteries[0].state == 'finish' ? 
                                            `Finalizó`
                                            :
                                            `Sin jugar`
                                        }
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
    )
}