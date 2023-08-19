import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableHighlight, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import Puntos from "./puntos/puntos";

export default function Level(props){
    const usuario = props.usuario;
    const profile = props.profile;

    const { navigate } = useNavigation();
    const [active, setActive] = useState('history');
    return (
        <SafeAreaView style={{marginTop:30,backgroundColor:'white'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between', padding:20}}>
                <TouchableHighlight style={{width:'10%'}} underlayColor={'white'} activeOpacity={0.7} 
                onPress={() => navigate('ProfileNovax')}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" />
                </TouchableHighlight>
            </View>
            <ScrollView>
                <View style={{marginLeft:'5%',width:'90%'}}>
                    <Text style={{fontSize:16,color: 'black',marginTop:10, fontWeight:'bold'}}>Tú nivel</Text>
                    <View style={{marginTop:100}}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{fontSize:14,color: '#666'}}>Puntos</Text>
                            <Text style={{fontSize:36,fontStyle:'italic', fontWeight:'bold',color: 'black',marginTop:10}}>
                                {new Intl.NumberFormat().format(profile.res.puntos)} </Text>
                        </View>
                    </View>
                    <View style={{marginTop:40}}>
                        <Text style={{fontSize:12,color: '#666'}}>Observa tu puntaje para pasar al próximo nivel</Text>
                        
                        {/*  Llamamos los puntos */}
                        <Puntos profile={profile} />

                    </View>
                    <View style={{marginTop:40}}>
                        <Text>¡{profile.res.name}, actualmente eres nivel 1!</Text>
                        <Text style={{marginTop:20}}>Cada nivel tiene sus propios beneficios, a continuación te los presentamos.</Text>
                    </View>
                    <View style={{marginTop:100}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                            <TouchableHighlight 
                            style={active == 'history' ? {width:'50%',padding:15,borderTopLeftRadius:5,
                            borderBottomLeftRadius:5,backgroundColor:'black'} : {width:'50%',padding:15}}
                            onPress={() => setActive('history')}
                            activeOpacity={0.7} underlayColor={active == 'history' ? 'black' : 'white'}>
                                <Text style={active == 'history' ? {textAlign:'center',color: 'white'} 
                                : {textAlign:'center',color: 'black'}}>Nivel</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={active == 'level' ? {width:'50%',padding:15,borderTopRightRadius:5,
                            borderBottomRightRadius:5,backgroundColor:'black'} : {width:'50%',padding:15}}
                            onPress={() => setActive('level')}
                            activeOpacity={0.7} underlayColor={active == 'level' ? 'black' : 'white'}>
                                <Text style={active == 'level' ? {textAlign:'center',color: 'white'} 
                                : {textAlign:'center',color: 'black'}}>Requisitos</Text>
                            </TouchableHighlight>
                        </View>
                        {
                            active == 'history' ?
                            <View style={{marginTop:40,marginBottom:150}}>
                                <Text style={{fontSize:14,color: '#666',fontWeight:'100'}}>
                                    Niveles y beneficios
                                </Text>
                                <View style={{marginTop:30, width:'100%'}}>
                                    <View style={{marginTop:20,width:'100%'}}>
                                        <Text style={{fontSize:12,fontWeight:'bold'}}>Nivel 1</Text>
                                        <View style={{width:'90%',marginLeft:'5%',marginTop:20}}>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Acceso a los sorteos y juegos de nivel 1</Text>
                                            </View>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Comisión del 40% por venta</Text>
                                            </View>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Retiro de comisión a partir de 100.000 COP</Text>
                                            </View>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Participar de 1 sorteo máximo a la vez.</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{marginTop:40,width:'100%'}}>
                                        <Text style={{fontSize:12,fontWeight:'bold'}}>Nivel 2</Text>
                                        <View style={{width:'90%',marginLeft:'5%',marginTop:20}}>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Acceso a los sorteos y juegos de nivel 2 e inferiores</Text>
                                            </View>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Acceso a sorteos de comisión del 50%</Text>
                                            </View>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Acceso a nuestro centro de inversión</Text>
                                            </View>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Máximo 3 sorteos al mismo tiempo.</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{marginTop:40,width:'100%'}}>
                                        <Text style={{fontSize:12,fontWeight:'bold'}}>Nivel 3</Text>
                                        <View style={{width:'90%',marginLeft:'5%',marginTop:20}}>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Acceso a los sorteos y juegos de nivel 3 e inferiores</Text>
                                            </View>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Acceso a sorteos de comisión del 60%</Text>
                                            </View>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Acceso a crear equipo de ventas</Text>
                                            </View>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Máximo 5 sorteos al mismo tiempo.</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{marginTop:40,width:'100%'}}>
                                        <Text style={{fontSize:12,fontWeight:'bold'}}>Nivel 4 - PRO</Text>
                                        <View style={{width:'90%',marginLeft:'5%',marginTop:20}}>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Beneficios especiales</Text>
                                            </View>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Solicitar inversión para tu empresa y/o negocio.</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginTop:60}}>
                                    <View style={{padding:10}}>
                                        <Text style={{fontSize:12,textAlign:'center',color:'#666'}}>Más allá de la suerte, diseñando el futuro.</Text>
                                    </View>
                                </View>
                            </View>
                            :
                            <View style={{marginTop:40,marginBottom:100}}>
                                <Text style={{fontSize:14,color: '#666',fontWeight:'100'}}>
                                    Requisitos
                                </Text>
                                <View style={{marginTop:30, width:'100%'}}>
                                    <View style={{marginTop:20,width:'100%'}}>
                                        <Text style={{fontSize:12,fontWeight:'bold'}}>Nivel 1</Text>
                                        <View style={{width:'90%',marginLeft:'5%',marginTop:20}}>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Tener 0 puntos de NovaX</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{marginTop:40,width:'100%'}}>
                                        <Text style={{fontSize:12,fontWeight:'bold'}}>Nivel 2</Text>
                                        <View style={{width:'90%',marginLeft:'5%',marginTop:20}}>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Tener 100.000 puntos de NovaX</Text>
                                            </View>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Haber participado en 2 sorteos</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{marginTop:40,width:'100%'}}>
                                        <Text style={{fontSize:12,fontWeight:'bold'}}>Nivel 3</Text>
                                        <View style={{width:'90%',marginLeft:'5%',marginTop:20}}>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Tener 400.000 puntos de NovaX</Text>
                                            </View>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Haber participado en 5 sorteos</Text>
                                            </View>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Haber entrado en TOP 10 ventas </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{marginTop:40,width:'100%'}}>
                                        <Text style={{fontSize:12,fontWeight:'bold'}}>Nivel 4 - PRO</Text>
                                        <View style={{width:'90%',marginLeft:'5%',marginTop:20}}>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Tener 1.000.000 puntos NovaX</Text>
                                            </View>
                                            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                                                <Ionicons name="ellipse-sharp" size={12} color="#666" />
                                                <Text style={{marginLeft:10, fontSize:12,color: '#666'}}>Solicitar permiso para subir de nivel.</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        }
                    </View>
                </View>
            </ScrollView> 
        </SafeAreaView>
    )
}