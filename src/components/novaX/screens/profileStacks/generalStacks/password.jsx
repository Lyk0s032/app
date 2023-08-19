import React, { useState } from "react";
import { Image, KeyboardAvoidingView, SafeAreaView, ScrollView, Text, TextInput, TouchableHighlight, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import * as acciones from './../acciones/acciones';
import { useDispatch, useSelector } from "react-redux";
import * as actions from './../../../../../store/actions/actions';


export default function Password(){
    const usuario = useSelector(store => store.usuario.user); 
    const dispatch = useDispatch();
    const { navigate } = useNavigation();
    const [active, setActive] = useState('history');

    const [changed, setChanged] = useState(false);
    const [password, setPassword] = useState(null);
    const [rePassword, setRepassword] = useState(null);
    const [errPassword, setErrPassword] = useState(null);

    // Estado cuando la petición se envia
    const [loading, setLoading] = useState(false)

    const changePassword = async () => {
        if(password == rePassword){
            setLoading(true);
            const sendTry = await acciones.changePassword(password, usuario.id)
            .then((res) => {
                setLoading(false);
                setChanged(true);
            })
            .then(async (response) => {
                dispatch(actions.closingSesion())
                return true
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
        }else{
            setErrPassword('Las contraseñas no coinciden.');
        }
    }
    return (
        <SafeAreaView style={{marginTop:30,backgroundColor:'white'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between', padding:20}}>
                <TouchableHighlight style={{width:'20%',padding:10,paddingLeft:0}} underlayColor={'white'} activeOpacity={0.7} 
                onPress={() => navigate('DetailsNovax')}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" />
                </TouchableHighlight>
            </View>
            <ScrollView>
                <View style={{marginLeft:'5%',width:'90%', marginBottom:100}}>
                    <Text style={{fontSize:16,color: 'black',marginTop:10, fontWeight:'bold'}}>Cambiar la contraseña</Text>
                    <Text style={{fontSize:12,color: '#666',marginTop:10}}>
                        Recuerda cambiar frecuentemente tu contraseña por seguridad.
                    </Text>
                    <KeyboardAvoidingView>
                        <View style={{marginTop:50, backgroundColor:'white'}}>
                            <Text style={{fontSize:12,color: '#666'}}>Nueva contraseña</Text>
                            <TextInput placeholder="* * * * *" style={{marginTop:10,borderWidth:.3,borderColor:'#ccc', padding:10,fontSize:16}} 
                            value={password}
                            secureTextEntry={true}
                            onChangeText={(e) => {
                                setPassword(e)
                            }}
                            />


                            <Text style={{fontSize:12,color: '#666',marginTop:30}}>Repite la contraseña</Text>
                            <TextInput placeholder="* * * * *" style={{marginTop:10,borderWidth:.3,borderColor:'#ccc', padding:10,fontSize:16}} 
                             value={rePassword}
                             secureTextEntry={true}
                             onChangeText={(e) => {
                                setRepassword(e);
                                if(e != password){
                                    setErrPassword('Las contraseñas no coinciden.')
                                }else{
                                    setErrPassword(null);
                                }
                             }}
                            />
                            <Text style={{fontSize:12,color: 'red'}}>{errPassword ? errPassword : null}</Text>
                            {
                                loading ?  
                                <Text style={{fontSize:12,marginTop:20,color: '#666'}}>
                                    Estamos cambiando tu contraseña...
                                </Text>
                                :
                                <TouchableHighlight style={{padding:15,backgroundColor:'black', borderRadius:5,borderWidth:.3,borderColor:'#ccc',
                                 marginTop:60}} onPress={() => changePassword()}>
                                    <Text style={{fontSize:14,color: 'white', textAlign:'center'}}>Guardar nueva contraseña</Text>
                                </TouchableHighlight>
                            }
                            
                        </View>
                    </KeyboardAvoidingView>

                    <View style={{marginTop:60}}>
                        <Text style={{fontSize:12,color: '#666', textAlign:'center'}}>
                            Más allá de la suerte, diseñando el futuro.
                        </Text>
                    </View>
                </View>
            </ScrollView>

            {
                changed ? // Si esta activo, mostramos este apartado.
                    <View style={{position:'absolute', left:0,right:0,top:0,bottom:0,justifyContent:'space-around', alignItems:'center'}}>
                        <View style={{padding:30,backgroundColor:'white',borderRadius:5,
                        width:'100%', paddingTop:120,paddingBottom:120}}>
                            <View style={{padding:20}}>
                                <Image source={require('./../../../../../assets/img/Padlock.gif')} style={{width:'100%', height:200}} resizeMode="contain" />
                            </View>
                            <View>
                                <Text style={{fontSize:24, textAlign:'center'}}>¡Contraseña cambiada con Éxito!</Text>
                                <Text style={{fontSize:12, textAlign:'center',color: '#666', marginTop:30}}>
                                    Por tu seguridad, vuelve a iniciar sesión
                                </Text>

                                <Text style={{marginTop:30, textAlign:'center'}}>
                                    Cerrando sesión...
                                </Text>
                            </View>
                        </View>
                    </View>
                :null
            } 
        </SafeAreaView>
    )
}