import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableHighlight, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from 'expo-secure-store';
import * as actions from './../../../../store/actions/actions';
import { useDispatch } from "react-redux";

export default function Details(){
    const dispatch = useDispatch();

    const [close, setClose] = useState(null);
    const closeSessión  = async () => {
        const a = await SecureStore.deleteItemAsync('token');
        dispatch(actions.closingSesion());
    }
    const { navigate } = useNavigation();
    const [active, setActive] = useState('history');
    return (
        <SafeAreaView style={{marginTop:30,backgroundColor:'white'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between', padding:20}}>
                <TouchableHighlight style={{width:'10%',padding:10,paddingLeft:0}} underlayColor={'white'} activeOpacity={0.7} 
                onPress={() => navigate('ProfileNovax')}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" />
                </TouchableHighlight>
            </View>
            <ScrollView>
                <View style={{marginLeft:'5%',width:'90%', marginBottom:100}}>
                    <Text style={{fontSize:16,color: 'black',marginTop:10, fontWeight:'bold'}}>Opciones</Text>

                    <View style={{marginTop:30}}>
                        <TouchableHighlight style={{width:'100%',padding:10}} onPress={() => navigate('GeneralDatails')}
                            underlayColor={'white'} activeOpacity={0.7}>
                            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                                <View style={{width:'30%',alignItems:'center'}}>
                                    <Ionicons name="information" size={30} color="#666" />
                                </View>
                                <View>
                                    <Text style={{fontSize:14,color: '#666'}}>Información general</Text>
                                    <Text style={{fontSize:12,color: '#ccc'}}>Nombre, correo, teléfono, etc...</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        
                        <TouchableHighlight style={{width:'100%',padding:10}} onPress={() => navigate('ChangePasswordDetails')} 
                        underlayColor={'white'} activeOpacity={0.7}>
                            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}} >
                                <View style={{width:'30%',alignItems:'center'}}>
                                    <Ionicons name="key-outline" size={30} color="#666" />
                                </View>
                                <View>
                                    <Text style={{fontSize:14,color: '#666'}}>Configuración</Text>
                                    <Text style={{fontSize:12,color: '#ccc'}}>Cambio de contraseña</Text>
                                </View>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight style={{width:'100%',padding:10}} onPress={() => navigate('LanguagueDatails')}
                            underlayColor={'white'} activeOpacity={0.7}>
                            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                                <View style={{width:'30%',alignItems:'center'}}>
                                    <Ionicons name="language" size={24} color="#666" />
                                </View>
                                <View>
                                    <Text style={{fontSize:14,color: '#666'}}>Idioma</Text>
                                    <Text style={{fontSize:12,color: '#ccc'}}>Español</Text>
                                </View>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight style={{width:'100%',padding:10}} onPress={() => navigate('ContactDatails')}
                            underlayColor={'white'} activeOpacity={0.7}>
                            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                                <View style={{width:'30%',alignItems:'center'}}>
                                    <Ionicons name="call-outline" size={24} color="#666" />
                                </View>
                                <View>
                                    <Text style={{fontSize:14,color: '#666'}}>Contactar</Text>
                                    <Text style={{fontSize:12,color: '#ccc'}}>Linea de atención</Text>
                                </View>
                            </View>
                        </TouchableHighlight>

                        <View style={{marginTop:50,paddingTop:30,borderTopWidth:.3,borderTopColor:'#ccc'}} 
                        >
                            <TouchableHighlight style={{width:'100%',padding:10}} onPress={() => navigate('NovaxDatails')}
                            underlayColor={'white'} activeOpacity={0.7}>
                                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                                    <View style={{width:'30%',alignItems:'center'}}>
                                        <Ionicons name="business" size={24} color="#666" />
                                    </View>
                                    <View>
                                        <Text style={{fontSize:14,color: '#666'}}>NovaX</Text>
                                        <Text style={{fontSize:12,color: '#ccc'}}>¿Quienes somos?, misión, visión.</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={{width:'100%',padding:10}} onPress={() => navigate('QuestionDatails')}
                            underlayColor={'white'} activeOpacity={0.7}>
                                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                                    <View style={{width:'30%',alignItems:'center'}}>
                                        <Ionicons name="help-circle-outline" size={24} color="#666" />
                                    </View>
                                    <View>
                                        <Text style={{fontSize:14,color: '#666'}}>Preguntas frecuentes</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={{width:'100%',padding:10}} onPress={() => navigate('ConditionsDatails')}
                            underlayColor={'white'} activeOpacity={0.7}>
                                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                                    <View style={{width:'30%',alignItems:'center'}}>
                                        <Ionicons name="scan-sharp" size={24} color="#666" />
                                    </View>
                                    <View>
                                        <Text style={{fontSize:14,color: '#666'}}>Términos y condiciones</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={{marginTop:50,paddingTop:10,borderTopWidth:.3,borderTopColor:'#ccc'}}>
                            <TouchableHighlight style={{width:'100%',padding:10}} onPress={() => {
                                console.log('Precionaste cerrar sesión');
                                setClose(true);
                                closeSessión();
                            }} activeOpacity={0.7} underlayColor={'white'}>
                                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                                    <View style={{width:'30%',alignItems:'center'}}>
                                        <Ionicons name="log-out-outline" size={24} color="#666" />
                                    </View>
                                    <View>
                                        <Text style={{fontSize:14,color: '#666'}}>Cerrar sesión</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <Text style={{fontSize:12, textAlign:'center',color: "#666", marginTop:50}}>{close ? 'Cerrando sesión...' : null }</Text>
                            
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