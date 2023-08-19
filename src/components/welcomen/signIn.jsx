import React, { useState } from "react";
import { View,Text, TouchableHighlight, TextInput, Image, ScrollView, KeyboardAvoidingView } from "react-native";
import * as actions from '../../store/actions/actions';
import { useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { signIn } from "./js/movements";

import * as SecureStore from 'expo-secure-store';
import { Ionicons } from '@expo/vector-icons';

export default function SignIn(props){

    const dispatch = useDispatch();
    const [mistake, setMistake] = useState(null);
    const [loading, setLoading] = useState(false);
    const { control, handleSubmit, formState: {errors} } = useForm({
        defaultValues: {
            phone: '',
            password:''
        }
    });
    // Validamos el token 
    const validateToken = async () => {
        const dataToken = await SecureStore.getItemAsync("token")
        if(!dataToken){
        console.log('No hay toquen');
        }else{
            dispatch(await actions.validateToken(dataToken));
        }  
    }
    const onSubmit = async (data) => {
        setLoading(true);
        const sign = await signIn(data)
        .then(async result => {
            setLoading(false);
            console.log(result);
            if(result.status){
                if( result.status == 200){
                    setMistake(null);
                    const token = await SecureStore.getItemAsync('token');
                    console.log(token);
                    console.log('estamos aqui');
                    return validateToken()
                }


            }else if(result == 404){
                return setMistake('No hemos encontrado este usuario')
            }else if(result == 401){
                return setMistake('Contraseña incorrecta')
            }else{
                return setMistake('Ha ocurrido un contra tiempo, intentalo más tarde.')
            }
        })
        .catch(err => {
            console.log(err);
            return null
        });
        return sign
        
    }
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
    return(
        <ScrollView style={{marginTop:30}}>
            <View style={{width:'100%',padding:10}}>
                <TouchableHighlight underlayColor={'white'} activeOpacity={0.7} onPress={() => {
                        console.log('volviendo al welcomen');
                        dispatch(actions.toLogin('welcomen'));
                    }}  style={{width:'40%', padding:10}}>
                    <Ionicons name="arrow-back-sharp" size={24} color="black" />
                </TouchableHighlight>
            </View>
            <View style={{width:'90%',marginLeft:'5%',marginBottom:130}}>
                <View style={{marginTop:0}}>
                    <Image source={require('../../assets/img/NovaX-White.png')} style={{width:'100%', height:120}} resizeMode="contain"  />
                    <Text style={{marginTop:20,textAlign:'right',fontWeight:'bold',fontSize:14}}>Iniciar sesión.</Text>
                    <Text style={{textAlign:'right',fontSize:12}}>Más allá de la suerte.</Text>

                </View>
                {/* <View style={{marginTop:50}}>
                    <Text style={{fontSize:40,color: 'black',fontWeight:'bold'}}>Acceder</Text>
                    <Text style={{color: '#666',fontSize:12}}>Más allá de la suerte, un paso hacia el futuro.</Text>
                </View> */}

                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={keyboardVerticalOffset}>
                    <View style={{marginTop:40, backgroundColor:'white'}}>
                        <View>
                            <Text style={{fontSize:12,color: '#ccc'}}>Número de teléfono</Text>
                            <Controller
                                control={control}
                                rules={{
                                    require:true
                                }}
                                render={({field: {onChange, onBlur, value}}) => (
                                    <TextInput placeholder="Escribe aquí..." 
                                    keyboardType="numeric"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                            
                                    style={{padding:10,borderBottomColor:'#ccc',borderBottomWidth:.5,fontSize:12}} 
                                    />

                                )}
                                name="phone" />
                        </View>
                        <View style={{marginTop:40}}>
                            <Text style={{fontSize:12,color: '#ccc'}}>Contraseña</Text>
                            <Controller
                                control={control}
                                rules={{
                                    require:true
                                }}
                                render={({field: {onChange, onBlur, value}}) => (
                                    <TextInput 
                                    placeholder="Número de teléfono" 
                                    secureTextEntry={true}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={{padding:10,borderBottomColor:'#ccc',borderBottomWidth:.5,fontSize:12}} />

                                )}
                                name="password" />
                        </View>
                            <Text style={{fontSize:12,color: 'red'}}>{ mistake ? mistake : null }</Text>
                        <View style={{marginTop:40}}>

                            {
                                loading == true ?
                                    // Código de carga
                                    <View style={{backgroundColor:'black',borderRadius:5,padding:10, width:'100%'}} >
                                        <View style={{flexDirection:'row', width:'100%', justifyContent:'flex-start', alignItems:'center'}} >
                                            <Image source={{uri:'https://i.imgur.com/1VSImGw.gif'}} style={{width:50,height:50}} /> 
                                            <Text style={{color: 'white', textAlign:'center', marginLeft:'20%'}}>Iniciando sesión...</Text>
                                        </View>
                                    </View>
   
                                :
                                    // Código por defecto
                                    <TouchableHighlight style={{backgroundColor:'white',borderWidth:1,borderColor:'#ccc',borderRadius:5,padding:10}}
                                    onPress={handleSubmit(onSubmit)} underlayColor={'white'} activeOpacity={0.7}>
                                        <View >
                                            <Text style={{textAlign:'center'}}>Iniciar sesión</Text>
                                        </View>
                                    </TouchableHighlight>                   
                            }
                            
                        </View>
                    </View>
                </KeyboardAvoidingView>

            </View>

        </ScrollView>
    )
}