import React, { useState } from "react";
import { Image, ScrollView, Share, Text, TouchableHighlight, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Modal from "react-native-modal";
import FormTicket from "./modalsHome/formTicket";
import Game from "./modalsHome/game";
import Seller from "./modalsHome/seller";

export default function GameActive(props){
    const games = props.game;
    const usuario = props.usuario;

    // Formulario vender tiquete.
    const [isModalVisible, setModalVisible] = useState(false);
    const [form, setForm] = useState('form');

    // Mostrar información general del sorteo 
    const [game, setGame] = useState(false);
    // Mostrar información para el vendedor 
    const [player, setPlayer] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const Onshare = async (id) => {
//         const options = {
// message: ,

//         url: `https:novax.com/sort/1230`
//         }

        try {
            const OnShare = await Share.share({
                    message: (`¡Hola!, te invitó a parcitipar en ${games.lotteries[0].name}.
Sitio web del sorteo en: 

https://novax-last.vercel.app/sort/${games.lotteries[0].id}`),
            });
            if(OnShare.action === Share.sharedAction){
                if(OnShare.activityType){
                    // COmpartimos.
                }else{
                    // Shared
                }
            }else if (OnShare.action === Share.dismissedAction){
                // dismissed
            }
        }catch(err){
            console.log('error');
        }
        
    }
    return (
        <View>
            <View style={{width:'90%',marginLeft:'5%',marginTop:20}}>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:20,borderBottomWidth:.3,borderBottomColor:"#ccc",justifyContent:'space-between',marginTop:20,padding:20}}>
                    <View>
                        <TouchableHighlight style={{width:'100%',alignItems:'center'}}>
                            <Ionicons name="chevron-back-sharp" size={24} color="black" />

                        </TouchableHighlight>
                    </View>
                    <View>
                        <Text style={{fontSize:14,color: 'black',fontWeight:'bold'}}>{games.lotteries[0].name}</Text>
                    </View>
                    <View>
                        <TouchableHighlight style={{width:'100%',alignItems:'center'}}>
                            <Ionicons name="chevron-forward" size={24} color="black" />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
            <View style={{width:'100%',alignItems:'center',marginTop:20}}>
                <View style={{marginTop:20, alignItems:'center',width:300,height:300, textAlign:'center'}}>
                    <View style={{width:'100%',height: 300,borderRadius:1000, backgroundColor:'#F46B49',justifyContent:'center'}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                            <View style={{width:'30%',padding:10,marginLeft:'-10%'}}>
                                <Image source={{uri: `${games.lotteries[0].img}`}}
                                style={{width:'100%',height:100}} />
                            </View>

                            <View style={{width:'60%',padding:20}}>
                                <View style={{width:'100%'}}>
                                    <Text style={{fontWeight:'bold',color: 'white',fontSize:16}}>{games.lotteries[0].name}</Text>
                                    <Text style={{fontSize:14,color: 'white'}}>{games.lotteries[0].price} COP</Text>
                                    <Text style={{fontSize:12,color: 'white'}}>{`Hasta el ${games.lotteries[0].finish.split('-')[1]} de ${new Date(`${games.lotteries[0].finish.split('-')[2]}-${games.lotteries[0].finish.split('-')[1] }-3`).toLocaleString('default', { month: 'long' })}` }</Text>
                                </View>
                                <View style={{width:'100%',marginTop:30}}>
                                    <TouchableHighlight style={{backgroundColor:'white', width:'100%',padding:10,borderRadius:5}}
                                    onPress={() => toggleModal()} underlayColor={'#ccc'} activeOpacity={0.7}>
                                        <View style={{width:'100%'}}>
                                            <Text style={{textAlign:'center',fontSize:14}}>
                                                Inscribir
                                            </Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </View>
                            <View style={{width:'20%'}}>
                            </View>
                        </View>
                    </View>
                </View>
            </View> 
            <View style={{width:'100%',marginLeft:'0%',marginTop:30}}>
                <View style={{width:'100%'}}>
                    <TouchableHighlight style={{borderRadius:5}} onPress={() => setGame(true)} activeOpacity={0.7} underlayColor={'white'}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignItems:'center'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <View style={{padding:10}}>
                                    <Ionicons name="checkmark" size={24} color="black" />                         
                                </View>
                                <View>
                                    <Text style={{fontSize:14,fontWeight:'bold'}}>Sorteo</Text>
                                    <Text style={{fontSize:12,color: '#ccc'}}>Información para clientes</Text>
                                </View>
                            </View>
                            <View>
                                <Text>Ir</Text>
                            </View>
                        </View>

                    </TouchableHighlight>
                    <TouchableHighlight style={{borderRadius:5}} onPress={() => setPlayer(true)} activeOpacity={0.7} underlayColor={'white'}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignItems:'center'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <View style={{padding:10}}>
                                    <Ionicons name="business" size={24} color="black" />                         
                                </View>
                                <View style={{padding:10}}>
                                    <Text style={{fontSize:14,fontWeight:'bold'}}>Vendedores</Text>
                                    <Text style={{fontSize:12,color: '#ccc'}}>Beneficios, comisiones, etc.</Text>
                                </View>
                            </View>
                            <View>
                                <Text>Ir</Text>
                            </View>
                        </View>

                    </TouchableHighlight>
                    <TouchableHighlight style={{borderRadius:5}} onPress={Onshare} underlayColor={'white'} activeOpacity={0.7}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignItems:'center'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <View style={{padding:10}}>
                                    <Ionicons name="arrow-redo-outline" size={24} color="black" />                           
                                </View>
                                <View style={{padding:10}}>
                                    <Text style={{fontSize:14,fontWeight:'bold'}}>Compartir</Text>
                                    <Text style={{fontSize:12,color: '#ccc'}}>Amigos y contactos</Text>
                                </View>
                            </View>
                            <View>
                                <Text>Ir</Text>
                            </View>
                        </View>

                    </TouchableHighlight>

                </View>
            </View>
            <View> 
                <Modal animationType="slide" transparent={true} isVisible={isModalVisible} style={{ justifyContent: 'flex-end', margin: 0 }}>     
                    <View style={{ flex: 1, backgroundColor: 'white'}}>
                        <View style={{padding:15,width:'100%',borderBottomWidth:.4,borderColor:'#ccc',flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                            <Text></Text>
                            <Text style={{color: '#666',textAlign:'center',fontSize:16}}>TTR 200 SPORT</Text>
                            <TouchableHighlight onPress={() => {
                                setForm('form');
                                return toggleModal()
                            }} underlayColor={'white'} activeOpacity={0.7}>
                                <Ionicons name="close-outline" size={24} color="black" />
                            </TouchableHighlight>
                        </View>
                        <ScrollView>
                            <View style={{marginLeft:'5%', width:'90%'}}>
                            {
                            form == 'form' ?
                                <FormTicket games={games} usuario={usuario} /> 
                            :
                                null
                            }
                            </View>
                        </ScrollView>
                    </View>
                </Modal>
            </View>


            {/* GAME */}
            <View > 
                <Modal animationType="slide" transparent={true} isVisible={game} style={{ justifyContent: 'flex-end', margin: 0 }}>
                    
                    <View style={{ flex: 0.9, backgroundColor: 'white', alignItems: 'center',borderTopLeftRadius:10,borderTopRightRadius:10 }}>
                        <View style={{width:'100%', padding:10,flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Text></Text>
                            <Text style={{fontSize:14}}>TTR 200 SPORT</Text>
                            
                            <TouchableHighlight onPress={() => setGame(false)} activeOpacity={0.7} underlayColor={'white'} style={{marginLeft:-20,padding:10}}>
                                <Ionicons name="close" size={24} color="black" />
                            </TouchableHighlight>
                        
                        </View>
                        
                        <View style={{width:'100%'}}>
                            <Game sorteo={games} usuario={usuario} />
                        </View>

                    </View>
                </Modal>
            </View>

            {/*  PARA EL VENDEDOR */}

            <View > 
                <Modal animationType="slide" transparent={true} isVisible={player} style={{ justifyContent: 'flex-end', margin: 0 }}>

                    <View style={{ flex: 0.9, backgroundColor: 'white', alignItems: 'center',borderTopLeftRadius:10,borderTopRightRadius:10 }}>
                        <View style={{width:'100%', padding:10,flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Text></Text>
                            <Text style={{fontSize:14}}>Para ti</Text>
                            <TouchableHighlight onPress={() => setPlayer(false)} activeOpacity={0.7} underlayColor={'white'} style={{marginLeft:-20,padding:10}}>
                                <Ionicons name="close" size={24} color="black" />
                            </TouchableHighlight>
                        </View>
                        <View style={{width:'100%'}}>
                            <Seller sorteo={games} usuario={usuario} />
                        </View>

                    </View>


                </Modal>
            </View>
        </View>
    )
}