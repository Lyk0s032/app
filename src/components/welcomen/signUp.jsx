import React, { useEffect, useState } from "react";
import { View,Text, TouchableHighlight, TextInput, Image, KeyboardAvoidingView, SafeAreaView, FlatList } from "react-native";
import * as actions from '../../store/actions/actions';
import { useDispatch, useSelector } from "react-redux";

import { Controller, useForm } from "react-hook-form";
import { showMessage, signUp, validateMovil } from "./js/movements";
import { ScrollView } from "react-native-gesture-handler";
import Avat from "./avatar";
import * as SecureStore from 'expo-secure-store';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from "react-native";

export default function SignUp(props){

    const dispatch = useDispatch();
    const avatars = useSelector(store => store.usuario.avatars);
    const [avatarChosee, setAvatar] = useState(null);
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const [invalidPass, setInvalidPass] = useState(false);
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

    const { control, handleSubmit, formState: {errors} } = useForm({
        defaultValues: {
            name:'',
            lastName:'',
            phone: '',
            password:'',
            rePassword:''
        }
    });
    // Primer handle
    const onAvance = async (data) => {
        if(data.name && data.lastName && data.phone){
            setLoading(true);
            setInvalid(false);
            const submitValidate = await validateMovil(data);
            console.log(submitValidate);
            if(submitValidate){
                setLoading(false);
                 if(submitValidate === 200){
                    setState('password')
                }else{
                    setInvalid(true);
                 }
            }
        }
    };

    // Segundo handle
    const onPassword = async (data) => {
        if(data.password != data.rePassword){
            setInvalidPass(true);
        }else{
            setInvalid(false);
            setState('avatar')

        }
    }
    const onSubmit = async (data) => {
        setState('building');
        const signUpHandle = await signUp(data, avatarChosee)
        console.log(signUpHandle);
        if(signUpHandle.status && signUpHandle.status == 200){
            setState('finish');
        }else{
            setState('password');
            setInvalidPass('Ha ocurrido un error al crear la cuenta. Intente más tarde.')
        }
    };

    const validateToken = async () => {
        const dataToken = await SecureStore.getItemAsync("token")
        if(!dataToken){
        console.log('No hay toquen');
        }else{
            dispatch(await actions.validateToken(dataToken));
        }  
    }

    

    useEffect(() => {
        dispatch(actions.axiosToAvatars());
    }, [])


    const windowHeight = Dimensions.get('window').height;
    return(
        <SafeAreaView style={{marginTop:30}}>
          <ScrollView> 
          <View style={state == 'building' || state == 'finish' || state == 'avatar' ? {display:'none'} :{width:'100%',padding:10}}>
                <TouchableHighlight underlayColor={'white'} activeOpacity={0.7} onPress={() => {
                        console.log('volviendo al welcomen');
                        dispatch(actions.toLogin('welcomen'));
                    }}  style={{width:'40%', padding:10}}>
                    <Ionicons name="arrow-back-sharp" size={24} color="black" />
                </TouchableHighlight>
            </View>
            
        {
            state == 'building' ?   
            <View>
                <Image source={{uri:'https://img.freepik.com/vector-premium/servicio-atencion-al-cliente-ilustracion-plana_579677-869.jpg'}}
                style={{width:'100%', height:300,marginTop:150}} />
                <Text style={{fontSize:22,textAlign:'center'}}>Configurando...</Text>
            </View>
            : state == "avatar" ? 
            <View style={{marginLeft:'5%',width:'90%',height:windowHeight - 50,marginTop:0}}>
                <Text style={{fontSize:20,color: '#666'}}>Seleccionar un Avatar</Text>
                
                <ScrollView style={{height:'30%',marginTop:10,borderBottomWidth:.3,borderColor:'#ccc'}}>
                   <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-start', flexWrap:'wrap'}}>
                   {
                        avatars && avatars.avatars && avatars.avatars.length ?
                         avatars.avatars.map((item,i)=>{
                            console.log(item)
                            return (  
                                <TouchableHighlight key={i+1} 
                                style={avatarChosee == item.name ? 
                                {width:'30%',padding:20, borderWidth:2,borderRadius:5,borderColor:'black',marginRight:10,marginBottom:20} 
                                : 
                                {width:'30%', padding:20,marginRight:10,borderRadius:5,marginBottom:20}}
                                
                                onPress={() => {
                                    if(avatarChosee == item.name){
                                        setAvatar(null)
                                    }else{
                                        setAvatar(item.name)
                                    }
                                }} underlayColor={'white'} activeOpacity={0.7}>
                                    <Image source={{ uri: `https://novax.up.railway.app/app/avatars/read/profile/${item.name}` }}
                                    style={{width:'100%', height:100}} resizeMode="contain" />
                                </TouchableHighlight> 
                            )
                         })
                          
                        : <Text>No hay avatars para mostrar</Text>
                    }
                   </View>
                </ScrollView>
                {
                    avatarChosee != null ?
                        <View style={{marginTop:20}}>
                            <TouchableHighlight style={{width:'90%',padding:10,marginLeft:'5%',borderRadius:5,
                        backgroundColor:'black'}} onPress={handleSubmit(onSubmit)}
                        activeOpacity={0.7} underlayColor={'black'}>
                                <Text style={{color: 'white',textAlign:'center'}}>Finalizar</Text>
                            </TouchableHighlight>
                        </View>
                    : 
                        <View style={{marginTop:20}}>
                            <TouchableHighlight style={{width:'90%',padding:10,marginLeft:'5%',borderRadius:5,
                        backgroundColor:'white'}}>
                                <Text style={{color: '#ccc',textAlign:'center'}}>Finalizar</Text>
                            </TouchableHighlight>
                        </View>
                }
                
            </View>
            :
            state == 'finish' ?
            <View>
                <Image source={{uri:'https://img.freepik.com/vector-premium/diseno-vector-ilustracion-estilo-plano-cita-contador_538610-408.jpg?w=360'}}
                style={{width:'100%', height:300,marginTop:150}} />
                <TouchableHighlight style={{width:'90%',marginLeft:'5%',padding:10,borderRadius:5,backgroundColor:'black',marginTop:20}}
                onPress={() => validateToken()} activeOpacity={0.2} underlayColor={'#666'}>
                    <View>
                        <Text style={{textAlign:'center',color: 'white',fontSize:20}}>¡Vamos!</Text>
                    </View>
                </TouchableHighlight>
                <Text style={{textAlign:'center',fontSize:12,color: '#ccc',marginTop:30}}>¡Más allá de la suerte, creando el futuro!</Text>

            </View>
            :
            
            <View style={{width:'90%',marginLeft:'5%', marginBottom:100}}>
                <View style={{marginTop:50}}>
                    <Image source={require('../../assets/img/NovaX-White.png')} style={{width:'100%',height:100}}  />
                    <Text style={{marginTop:20,textAlign:'right',fontWeight:'bold',fontSize:14}}>Crea tu cuenta.</Text>
                    <Text style={{textAlign:'right',fontSize:12}}>Diseñando el futuro.</Text>

                </View>
                {/* <View style={{marginTop:50}}>
                    <Text style={{fontSize:40,color: 'black',fontWeight:'bold'}}>Acceder</Text>
                    <Text style={{color: '#666',fontSize:12}}>Más allá de la suerte, un paso hacia el futuro.</Text>
                </View> */}

                
                        {                        
                        // PRIMER FILTRO PARA REGISTRAR NUEVO USUARIO
                        }
                        <KeyboardAvoidingView   behavior="position" keyboardVerticalOffset={keyboardVerticalOffset}
                        style={{backgroundColor:'white'}}>   
                            <View style={!state ? {marginTop:40, backgroundColor:'white'} : {display:'none'}}  >
                                <View> 
                                    <Text style={{fontSize:12,color: '#ccc'}}>Nombre</Text>
                                    <Controller
                                        control={control}
                                        rules={{ required:'Nombre es obligatorio', minLength:3}}
                                        render={({field: {onChange, onBlur, value}}) => (
                                            <TextInput placeholder="" 
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            keyboardType="default"
                                            style={{padding:10,borderBottomWidth:0.5,borderBottomColor:'#ccc'}} />

                                        )}
                                        name="name" />
                                        {
                                            errors?.name?.message && <Text style={{color: 'red',fontSize:12}}>{errors.name.message}</Text>
                                        }
                                </View>
                                <View style={{marginTop:20}}>
                                    <Text style={{fontSize:12,color: '#ccc'}}>Apellido</Text>
                                    <Controller
                                        control={control}
                                        rules={{
                                            required:'Este campo es obligatorio.', minLength:'3'
                                        }}
                                        render={({field: { onChange, onBlur, value}}) => (
                                            <TextInput placeholder="" 
                                            keyboardType="default"
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            
                                            style={{padding:10,borderBottomWidth:0.5,borderBottomColor:'#ccc'}} />

                                        )}
                                        name="lastName" />
                                        {
                                            errors?.lastName?.message && <Text style={{color: 'red',fontSize:12}}>{errors.lastName.message}</Text>
                                        }
                                </View>
                                <View style={{marginTop:20}}>
                                    <Text style={{fontSize:12,color: '#ccc'}}>Número de teléfono</Text>
                                    <Controller
                                        control={control}
                                        rules={{
                                            required: true,
                                            minLength: {
                                                value:9,
                                                message: 'Demasiado corto este número'
                                            }, 
                                            pattern: {
                                                value: /^[0-9]+$/i,
                                                message:'Solo se aceptan números'
                                            }
                                        }}
                                        
                                        render={({field: {onChange, onBlur, value}}) => (
                                            <TextInput placeholder="" 
                                            keyboardType="numeric"
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value.trim()}
                                            style={{padding:10,borderBottomWidth:0.5,borderBottomColor:'#ccc'}} />

                                        )}
                                        name="phone" />
                                        {
                                            errors?.phone?.message && <Text style={{color: 'red',fontSize:12}}>{errors.phone.message}</Text>
                                        }
                                        {
                                            invalid == true ?
                                            <Text style={{fontSize:12,color: 'red'}}>Este número de teléfo ya esta en uso</Text>
                                            : null
                                        }
                                </View>
                                {
                                    // Cargando la validación del número
                                    loading == true ?
                                    <View style={{width:'100%',alignItems:'center',marginTop:10}}>
                                        <Image source={{uri:'https://media.tenor.com/28DFFVtvNqYAAAAC/loading.gif'}}
                                        style={{width:50,height:50}} /> 
                                    </View>
                                    :
                                    <View style={{marginTop:40}}>

                                        <TouchableHighlight style={{backgroundColor:'white',borderWidth:1,borderColor:'#ccc',borderRadius:5,padding:10}}
                                        onPress={handleSubmit(onAvance)}>
                                            <View >
                                                <Text style={{textAlign:'center'}}>Avanzar</Text>
                                            </View>
                                        </TouchableHighlight>
                                    </View>
                                }
                                
                            </View>
                        </KeyboardAvoidingView> 
                        {                        
                        // SEGUNDO FILTRO PARA REGISTRAR NUEVO USUARIO PASSWORD
                        }    
                        <KeyboardAvoidingView   behavior="position" keyboardVerticalOffset={keyboardVerticalOffset}
                        style={{backgroundColor:'white'}}> 
                            <View style={state == 'password' ? {marginTop:40, backgroundColor:'white'} : {display:'none'}}>
                            
                            <View style={{marginTop:20}}>
                                    <Text style={{fontSize:12,color: '#ccc'}}>Contraseña</Text>
                                    <Controller
                                        control={control}
                                        rules={{
                                            require:true
                                        }}
                                        render={({field: {onChange, onBlur, value}}) => (
                                            <TextInput placeholder="" 
                                            secureTextEntry={true}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            style={{padding:10,borderBottomWidth:0.5,borderBottomColor:'#ccc'}} />

                                        )}
                                        name="password" />
                                </View>

                                <View style={{marginTop:20}}>
                                    <Text style={{fontSize:12,color: '#ccc'}}>Repita la contraseña</Text>
                                    <Controller
                                        control={control}
                                        rules={{
                                            require:true
                                        }}
                                        render={({field: {onChange, onBlur, value}}) => (
                                            <TextInput 
                                            placeholder=""
                                            secureTextEntry={true}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            style={{padding:10,borderBottomWidth:0.5,borderBottomColor:'#ccc'}} />

                                        )}
                                        name="rePassword" />
                                        {
                                            invalidPass == true ?
                                            <Text style={{color: 'red', fontSize:12,marginTop:10}}>Las contraseñas no coinciden.</Text>
                                            :null
                                        }
                                </View>
                                
                                <View style={{marginTop:40}}>
                                    <TouchableHighlight style={{backgroundColor:'white',borderWidth:1,borderColor:'#ccc',borderRadius:5,padding:10}}
                                    onPress={handleSubmit(onPassword)}>
                                        <View >
                                            <Text style={{textAlign:'center'}}>Continuar</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={{backgroundColor:'white',marginTop:20, borderRadius:5,padding:10}} 
                                    onPress={() => setState(null)}>
                                        <View >
                                            <Text style={{textAlign:'center',color: '#ccc'}}>Regresar</Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </View>   
                        </KeyboardAvoidingView>                       
            </View>
        }
          </ScrollView>

        </SafeAreaView>
    )
}