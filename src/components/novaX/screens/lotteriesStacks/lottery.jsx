import React, { useEffect, useState } from "react";
import { Button, Image, SafeAreaView, ScrollView, Text, TouchableHighlight, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import Modal from "react-native-modal";
import * as actions from './../../../../store/actions/actions';
// Acciones locales.
import * as acciones from './acciones/acciones';

import { useDispatch, useSelector } from "react-redux";
import LoadingTiquete from "../homeStacks/soldStacks/loading/tiquete";

export default function Lottery(props){
    const usuario = props.usuario;
    const myGames = props.myGames;

    const route = useRoute();
    const dispatch = useDispatch();
    const { navigate } = useNavigation();

    const [isModalVisible, setModalVisible] = useState(false);
    const [img, setImg] = useState(route.params.gameData.img);

    const sorteo = useSelector(store => store.games.sorteo);
    const loadingSorteo = useSelector(store => store.games.loadingSorteo);

    const Nrogames = myGames == 404 ? 0 : myGames.lotteries.length;


    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    }; 

    // Cargando para suscribir al usuario.
    const [loadingSuscribe, setLoadingSuscribe] = useState(false);
    const [err, setErr] = useState(false);   // Error en la inscripción.
    const [ok, setOk] = useState(false);     // Suscrito con éxito..

    // Función para subscribir usuario.
    const HandleSubscribe = async () => {
        setLoadingSuscribe(true);
        setOk(null);
        setErr(null);
        const a = await acciones.suscribe(usuario.id, sorteo.game.id)
        .then((res) => {
            if(res == 201){
                setOk(true);
                setTimeout(() => {
                    dispatch(actions.axiosToGetMyGames(usuario.id, true));
                }, 3000)
            }else{
                setLoadingSuscribe(false);
                if(res == 502) return setErr('Ya estas inscrito en este sorteo.')
                if(res == 404 || res == 501 || res == 500) return setErr('Ha ocurrido un error. Intentalo más tarde.');
            }
            
        }).catch((err) => {
            setLoadingSuscribe(false);
            console.log('errorcito');
        })
        return a;
    }
    useEffect(() => {
        dispatch(actions.axiosGetSorteo(route.params.gameData.id, usuario.id, true))
    }, [route.params.gameData.id])
    return(

        <SafeAreaView>
            <View style={{backgroundColor:'white'}}>
                <View style={{marginTop:30,padding:10}}>
                    <TouchableHighlight onPress={() => navigate('LotteriesNovax')} style={{width:'10%'}} underlayColor={'white'} activeOpacity={0.7}>
                        <Ionicons name="arrow-back-sharp" size={24} color="black" />
                    </TouchableHighlight>
                </View>
            </View>
            {
            !sorteo || loadingSorteo == true ? 
            <LoadingTiquete />
            
            : sorteo == 404 || sorteo == 'notrequest' ? 
                <View style={{marginTop:50}}><Text style={{fontSize:40}}>error en la respuesta...</Text></View>
            :
            <ScrollView style={{marginTop:0,backgroundColor:'white'}}>
                <View style={{backgroundColor: 'white',padding:10}}>
                    <Image source={{uri: img }} 
                    style={{width:'90%',height:300,marginLeft:'5%'}} resizeMode="contain" />
                    <ScrollView horizontal style={{width:'70%',marginLeft: '15%',padding:5}}>
                        <TouchableHighlight style={{width:50,height:50,borderRadius:5, borderWidth:.3,borderColor:'#ccc',marginRight:5}}
                        onPress={() => setImg(`${sorteo.game.img}`)} underlayColor={'white'} activeOpacity={0.7}> 
                            <Image source={{uri:`${sorteo.game.img}`}} 
                            style={{width:'100%',height:'100%'}} resizeMode="contain" />
                        </TouchableHighlight>
                        {
                            sorteo.game.imagenes && sorteo.game.imagenes.length ? 
                            sorteo.game.imagenes.map((imagen,i) => {
                                return (
                                    <TouchableHighlight key={i+1} style={{width:50,height:50,borderRadius:5, borderWidth:.3,borderColor:'#ccc',marginRight:5}}
                                        onPress={() => setImg(imagen.img)} underlayColor={'white'} activeOpacity={0.7}> 
                                        <Image source={{uri:`${imagen.img}`}} 
                                        style={{width:'100%',height:'100%'}} resizeMode="contain"/>
                                    </TouchableHighlight>
                                )
                            }) 
                            : null
                        }
                        
                    </ScrollView>
                    <View style={{width:'90%',marginLeft:'5%',flexDirection:'row',marginTop:20,alignItems:'center', justifyContent:'space-between'}}>
                        <View style={{width:'60%'}}>
                            <Text style={{fontSize:16,color: '#666'}}>{sorteo.name}</Text>
                            <Text style={{fontSize:12,color: 'green'}}>Disponible</Text>
                        </View>
                        <View  style={{width:'30%'}}>
                            <TouchableHighlight style={{padding:10,backgroundColor:'black',borderRadius:5, width:'90%', marginLeft:'5%'}}  onPress={toggleModal}>
                                <Text style={{fontSize:12,color: 'white'}} >
                                    Inscribirme
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:10,width:'90%',marginLeft:'5%'}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{fontSize:12}}>Precio </Text>
                        <Text style={{fontSize:12,fontWeight:'bold' }}>{new Intl.NumberFormat().format(sorteo.game.price)} COP</Text>
                    </View>
                    <View style={{marginTop:10, marginBottom:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{fontSize:12}}>Comisión </Text>
                        <Text style={{fontSize:12,fontWeight:'bold' }}>{new Intl.NumberFormat().format(sorteo.game.comision)} COP</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                        <Text style={{fontSize:12}}>Requisito </Text>
                        <View style={{padding:5,backgroundColor:'black',borderRadius:4}}>
                            <Text style={{fontSize:12,fontWeight:'bold',color: 'white' }}>Nivel {sorteo.game.nivel}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                        <Text style={{fontSize:12}}>Inicio </Text>
                        <Text style={{fontSize:12,fontWeight:'bold' }}>{`${sorteo.game.start.split('-')[1]} de ${new Date(`${sorteo.game.start.split('-')[2]}-${sorteo.game.start.split('-')[0]}-03`).toLocaleString('default', { month: 'long' })}`}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                        <Text style={{fontSize:12}}>Fin </Text>
                        <Text style={{fontSize:12,fontWeight:'bold' }}>{`${sorteo.game.finish.split('-')[1]} de ${new Date(`${sorteo.game.finish.split('-')[2]}-${sorteo.game.finish.split('-')[0]}-03`).toLocaleString('default', { month: 'long' })}`}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                        <Text style={{fontSize:12}}>Sorteo </Text>
                        <Text style={{fontSize:12,fontWeight:'bold' }}>{` ${sorteo.game.finish.split('-')[1]} de ${new Date(`${sorteo.game.finish.split('-')[2]}-${sorteo.game.finish.split('-')[0]}-03`).toLocaleString('default', { month: 'long' })} - ${sorteo.game.playWith}`}</Text>
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={{fontSize:12,color: '#ccc',marginTop:10}}>
                            {sorteo.game.description}
                        </Text>
                    </View> 

                        {
                           
                            <View style={{marginTop:30,marginBottom:40,borderTopWidth:.3,borderTopColor:'#ccc'}}>
                                {
                                sorteo.game.gift ? 
                                <View style={{marginTop:10}}>
                                    <Text style={{fontSize:14,fontWeight:'bold'}}>Para vendedores</Text>
                                </View>
                                :null
                                }
                                {
                                sorteo.game.gift ? 
                                <View style={{marginTop:40,padding:20}}>
                                    <Text style={{color: 'black',marginTop:10,fontSize:12}}>
                                        Si vendes el número ganador, recibirás premio de:
                                    </Text>
                                    <Text style={{fontSize:30,textAlign:'left',marginTop:10,fontStyle:'italic'}}>
                                        {new Intl.NumberFormat().format(sorteo.game.gift.nroGanador)} <Text style={{fontSize:16}}>COP</Text>
                                    </Text>
                                </View>
                                :null
                                }
                                {
                                sorteo.game.gift ? 
                                <View style={{marginTop:40}}>
                                    <Text style={{fontSize:12,color: '#666'}}>Puestos para vendedores</Text>
                                    <Text style={{marginTop:4}}>Los 3 primeros puestos recibirán premios de</Text>

                                    <View style={{width:'100%',padding:20,flexDirection:'row',justifyContent:'space-between', alignItems:'flex-start',
                                    marginTop:30,borderRadius:5}}>
                                        <View style={{width:'30%', borderRightWidth:.3,borderColor:'#ccc'}}>
                                            <Text style={{fontSize:12,textAlign:'center',color: '#666'}}>Puesto</Text>
                                            <Text style={{fontSize:30,color: 'black',textAlign:'center'}}>#1</Text>
                                        </View>
                                        <View style={{width:'60%'}}>
                                            <Text style={{fontSize:12,textAlign:'left',color: '#666'}}>Premio</Text>
                                            <Text style={{fontSize:22,textAlign:'left',fontStyle:'italic',marginTop:10}}>{new Intl.NumberFormat().format(sorteo.game.gift.primero)} <Text style={{fontSize:14}}>COP</Text></Text>
                                        </View>
                                    </View>
                                    <View style={{width:'100%',padding:20,flexDirection:'row',justifyContent:'space-between', alignItems:'flex-start',
                                    marginTop:10,borderRadius:5}}>
                                        <View style={{width:'30%', borderRightWidth:.3,borderColor:'#ccc'}}>
                                            <Text style={{fontSize:12,textAlign:'center',color: '#666'}}>Puesto</Text>
                                            <Text style={{fontSize:30,color: 'black',textAlign:'center'}}>#2</Text>
                                        </View>
                                        <View style={{width:'60%'}}>
                                            <Text style={{fontSize:12,textAlign:'left',color: '#666'}}>Premio</Text>
                                            <Text style={{fontSize:22,textAlign:'left',fontStyle:'italic',marginTop:10}}>{new Intl.NumberFormat().format(sorteo.game.gift.segundo)} <Text style={{fontSize:14}}>COP</Text></Text>
                                        </View>
                                    </View>
                                    <View style={{width:'100%',padding:20,flexDirection:'row',justifyContent:'space-between', alignItems:'flex-start',
                                    marginTop:10,borderRadius:5}}>
                                        <View style={{width:'30%', borderRightWidth:.3,borderColor:'#ccc'}}>
                                            <Text style={{fontSize:12,textAlign:'center',color: '#666'}}>Puesto</Text>
                                            <Text style={{fontSize:30,color: 'black',textAlign:'center'}}>#3</Text>
                                        </View>
                                        <View style={{width:'60%'}}>
                                            <Text style={{fontSize:12,textAlign:'left',color: '#666'}}>Premio</Text>
                                            <Text style={{fontSize:22,textAlign:'left',fontStyle:'italic',marginTop:10}}>{new Intl.NumberFormat().format(sorteo.game.gift.tercero)} <Text style={{fontSize:14}}>COP</Text></Text>
                                        </View>
                                    </View>
                                </View>
                                :null
                                }
                                <View style={{marginTop:40}}>
                                    <TouchableHighlight style={{width:'90%',marginLeft:'5%',borderRadius:5, padding:20,backgroundColor:'black'}} 
                                    onPress={toggleModal}>
                                        <Text style={{fontSize:14,color: 'white',textAlign:'center'}}>¡Quiero inscribirme!</Text>
                                    </TouchableHighlight>
                                </View>

                                <View style={{width:'96%',marginLeft:'2%',marginTop:0,marginBottom:60}}>
                                    <View style={{marginTop:50,alignItems:'center', width:'90%',marginLeft:'5%',marginBottom:20}}>
                                        <Image source={require('../../../../assets/img/NovaX.png')} style={{width:'50%'}}
                                        resizeMode="contain" />
                                        <Text style={{fontSize:12}}>Más allá de la suerte, diseñando el futuro.</Text>
                                    </View>
                                </View>
                            </View>
                            
                        }
                    
                </View>
                
            </ScrollView>
            }

            {
                !sorteo || loadingSorteo == true ? 
                null
                :

                <View > 
                <Modal 
                    animationType="slide"
                    transparent={true}
                    isVisible={isModalVisible}
                    
                    style={{ justifyContent: 'flex-end', margin: 0 }}>
                    
                    {
                        usuario.nivel >= sorteo.game.nivel ?
                        <View style={{ flex: 0.8, backgroundColor: 'white',justifyContent: 'space-around', alignItems: 'center' }}>
                            <View style={{padding:20,width:'100%',borderBottomWidth:.3,borderColor:'#ccc'}}>
                                <Text style={{color: '#666',textAlign:'center',fontSize:16}}>
                                    {sorteo.game.name}
                                </Text>
                            </View>
                            <ScrollView style={{width:'90%', marginLeft:'5%'}}>
                                <View style={{width:'100%'}}>
                                    <View style={{marginTop:30,width:'100%'}}>
                                        <Text style={{fontSize:24,fontWeight:'bold'}}>¡Hola, {usuario.name.split(' ')[0]}!</Text>
                                        <Text style={{fontSize:14,color: '#666', marginTop:10}}>¿Estas interesado en promover 
                                        el <Text style={{fontWeight:'bold',color: 'black'}}>{sorteo.game.name}</Text>? </Text>
                                        <View style={{marginTop:20}}>
                                            <Text style={{fontSize:12,color: '#666'}}>Tendrás una comisión del 40%.</Text>
                                        </View>
                                    </View>
                                    <View style={{marginTop:40,width:'90%'}}>
                                        <Text style={{fontSize:12,color: '#666'}}>Datos</Text>

                                        <View style={{marginTop:20,width:'100%',flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                                            <Text style={{fontSize:14,fontWeight:'bold'}}>Valor de tiquete</Text>
                                            <Text style={{fontSize:14,fontStyle:'italic'}}>{new Intl.NumberFormat().format(sorteo.game.price)} COP</Text>
                                        </View>

                                        <View style={{marginTop:20,width:'100%',flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                                            <Text style={{fontSize:14,fontWeight:'bold'}}>Comisión venta</Text>
                                            <Text style={{fontSize:14,fontStyle:'italic'}}>{new Intl.NumberFormat().format(sorteo.game.comision)} COP</Text>
                                        </View>
                                    </View>
                                    
                                </View>
                                <View style={{width:'90%',marginTop:30}}>
                                    <View style={{width:'100%', backgroundColor:'#FFFFFF'}}>
                                        {
                                            usuario.nivel == 1 && Nrogames >= 1 ?
                                                <View style={{marginTop:20, marginBottom:20}}>
                                                    <Text style={{fontSize:12,color: '#666'}}>
                                                        {`${usuario.name.split(' ')[0]}, eres nivel ${usuario.nivel} y ya estas suscrito a ${Nrogames} sorteo.`}
                                                    </Text>
                                                </View>
                                            : usuario.nivel == 2 && Nrogames >= 3 ?
                                                <View style={{marginTop:10, marginBottom:10}}>
                                                    <Text style={{fontSize:12,color: '#666'}}>
                                                        {`${usuario.name.split(' ')[0]}, eres nivel ${usuario.nivel} y ya estas suscrito a ${Nrogames} sorteos.`}
                                                    </Text>
                                                </View>
                                            : usuario.nivel == 3 && Nrogames >= 5 ?
                                                <View style={{marginTop:10, marginBottom:10}}>
                                                    <Text style={{fontSize:12,color: '#666'}}>
                                                        {`${usuario.name.split(' ')[0]}, eres nivel ${usuario.nivel} y ya estas suscrito a ${Nrogames} sorteos.`}
                                                    </Text>
                                                </View>
                                            :
                                                <View>
                                                    <TouchableHighlight style={{backgroundColor:'black',width:'90%',marginLeft:'5%',
                                                        borderRadius:5,padding:20}} onPress={() => HandleSubscribe()} underlayColor={'#666'} activeOpacity={0.7}>
                                                        <Text style={{color: 'white',fontSize:16,textAlign:'center'}}>¡Quiero inscribirme!</Text>
                                                    </TouchableHighlight>
                                                    
                                                </View>
                                        }
                                                
                                                <TouchableHighlight style={{width:'90%',marginLeft:'5%',borderRadius:5, marginTop:10,backgroundColor:'white',borderWidth:.3,borderColor:'black',
                                            padding:10}} onPress={() => toggleModal()} underlayColor={'white'} activeOpacity={0.7}>
                                                    <Text style={{color: '#666',textAlign:'center'}}>Cancelar</Text>
                                                </TouchableHighlight>

                                                <View style={{marginTop:20}}>
                                                    <Text style={{fontSize:12,color:'red'}}>{err ? err : null}</Text>
                                                </View>
                                    </View>
                                </View>
                            </ScrollView>
                                    
                        </View>
                    :
                        <View style={{ flex: 0.4, backgroundColor: 'white', alignItems: 'center' }}>
                            <View style={{padding:20,width:'100%',borderBottomWidth:.3,borderColor:'#ccc'}}>
                                <Text style={{color: '#666',textAlign:'center',fontSize:16}}>
                                    ¡Sube de nivel!
                                </Text>
                            </View>
                            <View style={{marginTop:40,marginLeft:'5%',width:'90%'}}>
                                <Text style={{textAlign:'center',fontSize:22,fontWeight:100}}>
                                    {`${usuario.name.split(' ')[0] }, aun no eres nivel ${sorteo.game.nivel}`}
                                </Text>

                                <TouchableHighlight style={{width:'90%',marginLeft:'5%',padding:10,backgroundColor:'white',
                            borderWidth:1,borderColor:'#ccc',borderRadius:5,marginTop:50}}
                            onPress={() => toggleModal()} underlayColor={'white'} activeOpacity={0.7}>
                                <Text style={{textAlign:'center',fontSize:12,color: '#666'}}>Regresar</Text>
                            </TouchableHighlight>
                            </View>
                        </View>
                    }
                    

                    {
                        loadingSuscribe ?
                        <View style={{position:'absolute', zIndex:2,left:0,right:0, bottom:0, top: 0, justifyContent:'space-around',}}>
                            {
                                ok ?
                                <View style={{backgroundColor:'white', padding:20, height:'40%', justifyContent:'space-around', alignItems:'center', opacity:1}}>
                                    <Image source={{uri: 'https://www.lappymaker.com/images/greentick-unscreen.gif'}} style={{width:'100%', height:150}}/>
                                    <Text style={{fontSize:18, color: 'black', fontStyle:'italic'}}>¡Perfecto!</Text>
                                    <Text style={{fontSize:12, color: '#666', fontStyle:'italic'}}>Configurando...</Text>

                                </View>
                                :
                                <View style={{backgroundColor:'white', padding:20, height:'40%', justifyContent:'space-around', alignItems:'center', opacity:1}}>
                                    <Image source={require('../../../../assets/loading.gif')} />
                                    <Text style={{fontSize:12, color: '#666', fontStyle:'italic'}}>Inscribiendo...</Text>
                                </View>
                            }
                        </View>
                        :   null
                    }

                </Modal>
                </View>

                
            }
           
        </SafeAreaView>
    )
}

