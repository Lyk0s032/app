import React from "react";
import { SafeAreaView, ScrollView, Text, TouchableHighlight, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default function Profile(props){

    const { navigate } = useNavigation();
    const user = useSelector(store => store.usuario.user);
    return (
        <SafeAreaView style={{backgroundColor:'white'}}>
            <View style={{padding:20,backgroundColor: 'white', flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                <Text></Text> 
                <Text>{user.name.split(' ')[0]}</Text>
                <TouchableHighlight style={{padding:5}} onPress={() => navigate('StacksDetailsNovax')}
                            underlayColor={'white'} activeOpacity={0.7}>
                    <Ionicons name="reorder-three-outline" size={24} color="black" />
                </TouchableHighlight>
            </View>
            <ScrollView >
                <View style={{marginLeft:'5%',width:'90%',marginTop:30, marginBottom:200}}>
                    <Text style={{fontWeight:'bold',fontSize:16}}>Mi tarjeta</Text>
                    <View style={{marginTop:20}}>
                        <View style={{width:'100%',borderRadius:20,backgroundColor:'black',height:200, justifyContent:'space-around',padding:20}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <View style={{width:50,height:30,backgroundColor:'white',borderRadius:5}}></View>
                                <Text style={{color: 'white'}}>Nivel 1</Text>
                            </View>

                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <Text style={{color: 'white',fontSize:14,fontWeight:200}}>+57 {user.movil} </Text>
                                <Text style={{color: 'white'}}>NovaX</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop:60}}>
                        <Text style={{fontWeight:100,fontSize:12,color: '#666'}}>Tus opciones</Text>
                        <View style={{marginTop:30}}>
                            <TouchableHighlight style={{padding:10}}  onPress={() => navigate('EntregasNovax')}
                            underlayColor={'white'} activeOpacity={0.7}>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                    <View>
                                        <Text style={{fontSize:14,color: 'black',fontWeight:'bold'}}>Entregas</Text>
                                        <Text style={{fontSize:12,color: '#666',fontWeight:'100'}}>Próxima entrega</Text>
                                    </View>
                                    <View>
                                        <Ionicons name="arrow-forward-sharp" size={24} color="black" />
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={{padding:10}} onPress={() => navigate('ComisionNovax')}
                            underlayColor={'white'} activeOpacity={0.7}>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                    <View>
                                        <Text style={{fontSize:14,color: 'black',fontWeight:'bold'}}>Comisión</Text>
                                        <Text style={{fontSize:12,color: '#666',fontWeight:'100'}}>Revisar mi dinero</Text>
                                    </View>
                                    <View>
                                        <Ionicons name="arrow-forward-sharp" size={24} color="black" />
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={{padding:10}}  onPress={() => navigate('LevelNovax')}
                            underlayColor={'white'} activeOpacity={0.7}>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                    <View>
                                        <Text style={{fontSize:14,color: 'black',fontWeight:'bold'}}>Nivel</Text>
                                        <Text style={{fontSize:12,color: '#666',fontWeight:'100'}}>Puntos y beneficios</Text>
                                    </View>
                                    <View>
                                        <Ionicons name="arrow-forward-sharp" size={24} color="black" />
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={{padding:10}} onPress={() => navigate('StacksDetailsNovax')}
                            underlayColor={'white'} activeOpacity={0.7}>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                    <View>
                                        <Text style={{fontSize:14,color: 'black',fontWeight:'bold'}}>Detalles</Text>
                                        <Text style={{fontSize:12,color: '#666',fontWeight:'100'}}>Información general</Text>
                                    </View>
                                    <View>
                                        <Ionicons name="arrow-forward-sharp" size={24} color="black" />
                                    </View>
                                </View>
                            </TouchableHighlight>
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
