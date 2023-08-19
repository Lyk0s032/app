import React, { useState } from "react";
import { Image, KeyboardAvoidingView, Linking, Text, TextInput, TouchableHighlight, View } from "react-native";
import { Controller, set, useForm } from "react-hook-form";
import { Ionicons } from '@expo/vector-icons';
import * as acciones from './../../../acciones/acciones';
import { useNavigation } from "@react-navigation/native";

export default function FormTicket(props){
    const games = props.games;
    const usuario = props.usuario; 

    const [loading, setLoading] = useState(false);
    const [formState, setForm] = useState('data');
    const { control, handleSubmit, formState: {errors}, reset } = useForm({
        defaultValues: {
            nameUser:'',
            phoneUser:'',
        }
    });
    // Números
    const [numeros, setNumeros] = useState({
        val: false,
        numbs:[]
    });
    const [number, setNumber] = useState(null)
    const [ErrorNumber, setErrorNumber] = useState(null);
    const onAvance = () => {
        setForm('numbers'); 
    }
    
    DeleteNumber = (a) => {
        console.log('eliminando número');
        const array = numeros.numbs.filter(n => n != a);
        return setNumeros({ 
            val: true,
            numbs: array
        })

    }



    const onCreate = async (data) => {
        setLoading(true);
        const signUpHandle = await acciones.createTicket(data, numeros.numbs, games.lotteries[0].id, usuario.id)
        .then((res) => {
            console.log(res);
            setLoading(true);
            if(res.status == 201){
                console.log('llego a 201');
                setFacture(res.data.response);
                setForm('successfull');
            } 
        })
        .catch(err => {
            setLoading(false);
            setErrorNumber('Ha ocurrido un error, intentalo más tarde.');
            console.log('Llego con error')
            console.log(err);
        })
        return console.log('finalizo');
    }


    // Datos de factura
    [facture, setFacture] = useState(null); // Factura.


    // Factura enviada. Mostramos opciones.
    const [sended, setSended] = useState(false);
    const wppFacture = async () => {
        let novaxLink = `https://novax-last.vercel.app/factura/${games.lotteries[0].id}`;
const message = `NovaX. 

Factura: ${novaxLink}.

Juega el ${games.lotteries[0].finish.split('-')[1]} de ${new Date(`${games.lotteries[0].finish.split('-')[2]}-${games.lotteries[0].finish.split('-')[1] }-3`).toLocaleString('default', { month: 'long' })}`
    
 
        const url = `https://wa.me/+57${facture.tiquete.phoneUser}/?text=${message}`;

        const send = await Linking.openURL(url);
        if(send == true){
            setSended(true);
        }
    }


    // Función para limpiar
    const clear = () => {
        setForm('data');
        setLoading(false);
        setNumeros({
            val: true,
            numbs: []
        });
        setNumber(null);
        setSended(false);
        reset();

    }
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;


    const  navigation = useNavigation();
    return (
        
        <View>{ 
            console.log(numeros)}
            {
            
                formState == 'data' ? 
                <View style={{marginTop:20, padding:10}}>
                    <View style={{marginBottom:30}}>
                        <Text style={{fontSize:40}}>¡Hola!.</Text>
                        <Text style={{fontSize:12,color: '#666',marginTop:10}}>
                            Juguemos al azar, mientras desarrollamos nuestra sociedad.
                        </Text>
                    </View>
                    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={keyboardVerticalOffset} style={{backgroundColor:'white'}}>
                        <View style={{backgroundColor:'white'}}>
                            <View style={{marginTop:30}}>
                                <Text style={{fontSize:12,color: '#666'}}>Nombre del jugador</Text>
                                <Controller
                                    control={control}
                                    rules={{ required:'Nombre es obligatorio', minLength:3}}
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <TextInput placeholder="Escribe aquí..." 
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        keyboardType="default"
                                        style={{padding:10,fontSize:12,color: '#666', borderBottomWidth:0.2,borderBottomColor:'#666'}} />

                                    )}
                                    name="nameUser" />
                            </View>
                            <View style={{marginTop:50}}>
                                <Text style={{fontSize:12,color: '#666'}}>Teléfono del jugador</Text>
                                <Controller
                                    control={control}
                                    rules={{ required:'Nombre es obligatorio', minLength:3}}
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <TextInput placeholder="Escribe aquí..." 
                                        keyboardType="numeric"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{padding:10,fontSize:12,color: '#666', borderBottomWidth:0.2,borderBottomColor:'#666'}} />

                                    )}
                                    name="phoneUser" />
                            </View>
                            <View style={{marginTop:50}}>
                                <TouchableHighlight style={{padding:15,width:'100%',borderRadius:5,backgroundColor: 'black'}}
                                onPress={handleSubmit(onAvance)} underlayColor={'white'} activeOpacity={0.7}>
                                    <View style={{flexDirection:'row',  justifyContent:'space-between', alignItems:'center'}}>
                                        <Text></Text>
                                        <Text style={{color: 'white', textAlign:'center'}}>Continuar</Text>
                                        <Ionicons name="arrow-forward" size={24} color="white" />
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                    
                </View>
                : formState == 'numbers' ? 
                <View>
                    <View style={{marginBottom:30,marginTop:40}}>
                        <View>
                            <Text style={{fontSize:12,fontWeight:'bold'}}>Números</Text>
                        </View>
                    </View>

                    {
                        loading == true ?
                            <View style={{backgroundColor:'red', position:'absolute', left:0, right:0, bottom:0,top:0, backgroundColor: 'transparent', 
                            padding:20, alignItems:'center', alignContent:'center', justifyContent:'space-around',zIndex:1}}>
                                <View>
                                    <Image source={{uri: 'https://thumbs.gfycat.com/PepperyMediumBrahmancow-max-1mb.gif'}} style={{width:200, height:200}} resizeMode="contain" />   
                                    <Text style={{textAlign:'center',fontSize:30,fontWeight:'bold'}}>Creando tiquete...</Text>
                                </View>
                            </View>
                        : null

                    }
                    <View style={{marginTop:10, marginBottom:30,padding:10}}>
                        {
                            numeros && numeros.numbs.length >= 1 ? 
                               <View style={{flexDirection:'row', alignItems:'center',justifyContent:'flex-start', flexWrap:'wrap'}}>
                                    {
                                    numeros.numbs.map((numero,i) => {
                                        return (
                                            <TouchableHighlight key={i+1} onPress={() => DeleteNumber(numero)} underlayColor={'white'} activeOpacity={0.7}
                                            style={{padding:10}}>
                                                <Text  style={{fontSize:16,fontWeight:'bold'}}>{numero}</Text>
                                            </TouchableHighlight>
                                        )
                                    })
                                    }
                               </View>
                            :<Text style={{fontSize:12}}>No hay números aun...</Text>
                        }
                    </View>
                    
                    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={keyboardVerticalOffset} style={{marginTop:40}}>
                        <View style={{backgroundColor:'white'}}>
                            <Text style={{fontSize:12,color: '#666'}}>Ingresa números</Text>
                            <Text></Text>
                            <Text style={{fontSize:12,color: 'red'}}>{ErrorNumber ? ErrorNumber : null}</Text>

                            <View style={{width:'100%', flexDirection:'row', marginTop:20, justifyContent:'space-between',alignItems:'center'}}>
                                <TextInput 
                                style={{width:'100%', justifyContent:'space-between', textAlign:'center', padding:10, 
                                borderBottomWidth:.3,borderColor:'#666',letterSpacing: 40,fontSize:40}}
                                keyboardType="numeric" 
                                name="primero"
                                maxLength={4}
                                value={number}
                                disableFullscreenUI={true}
                                
                                onChangeText={(e) => {
                                     if(e.length > 4){
                                        
                                        console.log('Es mayor ya')
                                        setNumber(String(e[e.length - 1]))
                                    }else{
                                        setErrorNumber(null);
                                        setNumber(String(e))
                                    }
                                }}/>
                                {/* <TextInput id="segundo" style={{width:'20%', padding:10, borderBottomWidth:.3,borderColor:'#666'}} />
                                <TextInput style={{width:'20%', padding:10, borderBottomWidth:.3,borderColor:'#666'}} />
                                <TextInput style={{width:'20%', padding:10, borderBottomWidth:.3,borderColor:'#666'}} /> */}
                            </View>
                            <TouchableHighlight style={{padding:15,marginTop:50, borderRadius:5,borderWidth:.3,borderColor:'#ccc'}}
                                onPressIn={() => {
                                    console.log('precionado');
                                    if(number.length < 4 || number.length > 4){
                                        setErrorNumber('Número debe ser de 4 dígitos.');
                                    }else{
                                        setNumeros({
                                            val: true,
                                            numbs: [...numeros.numbs, number]
                                        })
                                    }
                                }}>
                                <Text style={{fontSize:12,textAlign:'center', color: 'black'}}>
                                    Confirmar número
                                </Text>
                            </TouchableHighlight>

                            {
                                !numeros.numbs.length ? 
                                null 
                                :
                                <TouchableHighlight 
                                onPress={handleSubmit(onCreate)} underlayColor={'blac<'} activeOpacity={0.7}
                                style={{backgroundColor: 'black', padding:15,marginTop:20, borderRadius:5,borderWidth:.3,borderColor:'#ccc'}}>
                                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                                        <Text></Text>
                                        <Text style={{fontSize:12,textAlign:'center', color: 'white'}}>
                                            Avanzar
                                        </Text>
                                        <Ionicons name="arrow-forward" size={24} color="white" />
                                    </View>
                                </TouchableHighlight>
                            }
                        </View>
                    </KeyboardAvoidingView>

                    <View style={{marginTop:40}}>
                        <Text style={{fontSize:12,color: '#666',marginTop:10}}>
                            Toca el número, para eliminarlo.
                        </Text>
                    </View>
                </View>

                : formState == 'successfull' ?
                <View>
                    {
                        sended ?
                            <View style={{position:'absolute',padding:10,zIndex:1, left:0,top:0,right:0,bottom:0, alignItems:'center', justifyContent:'space-around'}}>
                                <View style={{shadowColor:'#000',shadowOffset:{width:0,height:3}, shadowOpacity:0.27, shadowRadius:4.65, elevation:6, 
                                padding:30, height:'90%',width:'100%',borderColor:'#ccc', backgroundColor:'white', zIndex:1, justifyContent:'center', alignItems:'center', backgroundColor:'white',borderRadius:5,zIndex:1}}>
                                    <View style={{marginBottom:100, alignItems:'center'}} >
                                        <Text style={{fontSize:40,color: 'black'}}>¡Listo!</Text>
                                        <View style={{marginTop:20}}>
                                            <Text style={{fontSize:12,color: '#666'}}>Listo, la factura ya debio de ser enviada.</Text>
                                        </View>
                                    </View>
                                    
                                    <TouchableHighlight 
                                    onPress={() => setSended(false)}
                                    underlayColor={'white'} activeOpacity={0.3}
                                    style={{padding:15,borderWidth:1,borderColor:'#666',borderRadius:5, width:'100%'}}>
                                        <Text style={{textAlign:'center',fontSize:12,color: '#666'}}>Ver factura</Text>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                    onPress={() => clear()}
                                    underlayColor={'white'} activeOpacity={0.3}
                                    style={{marginTop:10, padding:15,backgroundColor:'black', borderWidth:1,borderColor:'black',borderRadius:5, width:'100%'}}>
                                        <Text style={{textAlign:'center',fontSize:12,color: 'white'}}>Nuevo número</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        :null
                    }
                    
                    <View style={{marginLeft:'5%',width:'90%'}}>

                        <View style={{alignItems:'center',marginTop:30}}>
                            <Ionicons name="checkmark" size={40} color="green" />
                            <View style={{marginTop:30,alignItems:'center'}}>
                                <Text style={{fontSize:30,fontWeight:100}}>Factura</Text>
                                <Text style={{marginTop:10,color: '#666'}}>{`${facture.tiquete.nameUser}`}</Text>
                                <Text style={{marginTop:10,color: '#666',fontSize:10}}>{`${facture.tiquete.nameUser}`}</Text>
                            </View>
                            <View style={{marginTop:30,paddingTop:10,borderTopWidth:0.3,borderColor:'#666',width:'100%'}}>
                                <View style={{width:'90%',marginLeft:'5%',marginTop:10}}>
                                    <Text style={{fontWeight:'bold',color: '#666'}}>Detalles</Text>
                                    <View style={{marginTop:10,padding:10}}>
                                        <View style={{marginTop:10, flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
                                            <Text style={{fontSize:12}}>Fecha</Text>
                                            <Text style={{fontSize:12,fontWeight:'bold'}}>{`${facture.tiquete.dia} ${facture.tiquete.mes}`}</Text>
                                        </View>
                                        <View style={{marginTop:10, flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
                                            <Text style={{fontSize:12}}>Referencia</Text>
                                            <Text style={{fontSize:12,fontWeight:'100'}}>{`${facture.tiquete.reference}`}</Text>
                                        </View>
                                        <View style={{marginTop:10, flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
                                            <Text style={{fontSize:12}}>Vendido por</Text>
                                            <Text style={{fontSize:12,fontWeight:'bold'}}>{`${facture.usuario.name}`}</Text>
                                        </View>
                                        <View style={{marginTop:10, flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
                                            <Text style={{fontSize:12}}>Total</Text>
                                            <Text style={{fontSize:12,fontWeight:'bold'}}>{`${facture.tiquete.valor}`} COP</Text>
                                        </View>
                                        <View style={{marginTop:10, flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
                                            <Text style={{fontSize:12}}>Cantidad de números</Text>
                                            <Text style={{fontSize:12,fontWeight:'bold'}}>{`${facture.tiquete.nros}`}</Text>
                                        </View>

                                        <View style={{marginTop:30,borderTopWidth:.3,borderColor:'#ccc', paddingTop:20}}>
                                            <Text style={{fontSize:12,fontWeight:'bold'}}>Números</Text>
                                            <View style={{marginTop:30,alignItems:'center'}}>
                                                {
                                                    facture.numeros.map((numerito, i) => {
                                                        return (
                                                            <View key={i+1} style={{padding:10}}>
                                                                <Text style={{fontSize:24,color: '#666',fontStyle:'italic',fontWeight:200}}>{numerito.numero}</Text>
                                                            </View>
                                                        )
                                                    })
                                                }
                                                
                                            </View>
                                        </View>
                                        <View style={{marginTop:30,marginBottom:30}}>
                                            <TouchableHighlight onPress={() => wppFacture()} underlayColor={'white'} activeOpacity={0.3}
                                            style={{width:'90%',padding:10, borderWidth:1,borderRadius:5,borderColor:'#ccc'}}>
                                                <Text style={{textAlign:'center', fontSize:12}}>Enviar factura</Text>
                                            </TouchableHighlight>
                                        </View>
                                    </View>
                                </View> 
                            </View>
                        </View>
                    </View>
                </View>
                : 
                <View>
                    <TouchableHighlight>
                        <Text>Volver</Text>
                    </TouchableHighlight>
                </View>

            }
        </View>
    )
}