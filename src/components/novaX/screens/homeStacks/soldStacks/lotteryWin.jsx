import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Share, Text, TouchableHighlight, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './../../../../../store/actions/actions';
import LoadingTiquete from './loading/tiquete';
export default function Winner(props){
    const usuario = props.usuario;
    const { navigate } = useNavigation();
    const dispatch = useDispatch();
    const [shareModal, setShareModal] = useState(false);
    const gameSelected = useSelector(store => store.games.winnerGame);
    const loadingSelected = useSelector(store => store.games.loadingWinner);
    const [img, setImg] = useState(null)
    const route = useRoute();
    useEffect(() => {
        dispatch(actions.axiosGetWinnerGame(usuario.id,route.params.sorteoId,true)); 

    }, [route.params.sorteoId]) 


       const Onshare = async () => {
        try {
            const OnShare = await Share.share({
                    message: (`¡Hola!, te invitó a parcitipar en ${gameSelected.lotteries[0].name}.
Sitio web del sorteo en: 

https://novax.com.co/sorteo/${gameSelected.lotteries[0].id}`),
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
            console.log(err)
            console.log('error');
        }
        
    }
    return (
        <SafeAreaView style={{backgroundColor:'white'}}>
            <View style={{marginTop:30, padding:20,backgroundColor: 'white', flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                <TouchableHighlight style={{padding:5}} onPress={() => navigate('GameNovax')}
                            underlayColor={'white'} activeOpacity={0.7}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableHighlight>
                {
                    !gameSelected || loadingSelected == true ? null : <Text>{gameSelected.lotteries[0].name}</Text>
                }

                {
                    !gameSelected || loadingSelected == true ? null : 
                    <TouchableHighlight onPress={() => setShareModal(true)} underlayColor={'white'} activeOpacity={0.7}>
                        <Ionicons name="menu-outline" size={24} color="black" />
                    </TouchableHighlight>
                }
                
                
            </View> 
        {
        !gameSelected || loadingSelected == true ?
            
            <LoadingTiquete />
        :
            <ScrollView style={{paddingBottom:150}}>
                <View style={{width:'90%',marginLeft:'5%',marginTop:0}}>
                    {
                         gameSelected.lotteries[0].winner == null ?
                        <View style={{marginTop:20, height:200}}>
                            <Image source={require('./../../../../../assets/img/Winner2.png') } 
                            style={{width:'100%', height:200,
                                borderRadius:5}}
                                resizeMode='contain' />

                            <Text style={{fontSize:30,textAlign:'center'}}>¡Muy pronto!</Text> 
                            <Text style={{fontSize:12,color: '#666',textAlign:'center'}}>¡En poco tiempo conoceremos el gran número ganador!</Text>
                        </View>
                        :
                        <View style={{marginTop:20, height:200}}>
                            <Image source={require('./../../../../../assets/img/Winner2.png') } 
                            style={{width:'100%', height:200,
                                borderRadius:5}}
                                resizeMode='contain' />

                            <Text style={{fontSize:30,textAlign:'center'}}>¡Finalizó con éxito!</Text>
                            <Text style={{fontSize:12,color: '#666',textAlign:'center'}}>¡Un paso más cerca del horizonte!</Text>
                        </View>
                    }
                    
                    <View style={{marginTop:100}}>
                        <Text style={{fontSize:12,color:'#666'}}>Número</Text>
                        {
                            gameSelected.lotteries[0].winner == null ?
                            <View style={{marginTop: 30, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                <View style={{width:'20%', padding:10,borderBottomWidth:1, borderColor:'#666'}}>
                                    <Text style={{textAlign:'center',fontSize:20}}>
                                        ?
                                    </Text>
                                </View>
                                <View style={{width:'20%', padding:10,borderBottomWidth:1, borderColor:'#666'}}>
                                    <Text style={{textAlign:'center',fontSize:20}}>
                                        ?
                                    </Text>
                                </View>
                                <View style={{width:'20%', padding:10,borderBottomWidth:1, borderColor:'#666'}}>
                                    <Text style={{textAlign:'center',fontSize:20}}>
                                        ?
                                    </Text>
                                </View>
                                <View style={{width:'20%', padding:10,borderBottomWidth:1, borderColor:'#666'}}>
                                    <Text style={{textAlign:'center',fontSize:20}}>
                                        ?
                                    </Text>
                                </View>
                            </View>
                            :
                            <View style={{marginTop: 30, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                {
                                gameSelected.lotteries[0].winner.split('').map((numero, i) => {
                                    return (
                                        <View key={i+1} style={{width:'20%', padding:10,borderBottomWidth:1, borderColor:'#666'}}>
                                            <Text style={{textAlign:'center',fontSize:40}}>
                                                {numero}
                                            </Text>
                                        </View>
                                    )
                                })
                                }
                            </View>
                        }
                    </View>
                    <View style={{marginTop:30,width:'100%'}}>
                        <View style={{marginTop:10,padding:10, flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
                            <View style={{width:'20%'}}>                
                                <Image source={{uri: 'https://i.pinimg.com/originals/6d/0e/05/6d0e052a59840858186a37ba74de24b3.png'}}  
                                style={{width:'70%',height:100}} resizeMode="contain" />
                            </View>                                     
                            <View style={{padding:10, width:'80%'}}>
                                <View style={{marginTop:10,flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                                    <Text style={{fontSize:12,fontWeight:'bold'}}>
                                        {
                                            gameSelected.lotteries[0].winner == null ?
                                            `Juega`
                                            :
                                            `Jugó el`
                                        }
                                        
                                        </Text>              
                                    <Text style={{fontSize:12,color: '#666'}}>{`${gameSelected.lotteries[0].finish.split('-')[0]} de ${new Date(`${gameSelected.lotteries[0].finish.split('-')[2]}-${gameSelected.lotteries[0].finish.split('-')[1] }-3`).toLocaleString('default', { month: 'long' })}`}
                                    </Text>         
                                </View>                                 
                                <View style={{marginTop:10,flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                                    <Text style={{fontSize:12,fontWeight:'bold'}}>Número de</Text>              
                                    <Text style={{fontSize:12,color:'#666'}}>{gameSelected.lotteries[0].playWith}</Text>         
  
                                </View>                                 
                                <View style={{marginTop:10,flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                                    <Text style={{fontSize:12,fontWeight:'bold'}}>Hora</Text>              
                                    <Text style={{fontSize:12,color:'#666'}}>7:30 PM</Text>         
                                </View>  
                                <View style={{marginTop:10,flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                                    <Text style={{fontSize:12,fontWeight:'bold'}}>Ref</Text>              
                                    <Text style={{fontSize:11,color:'#666'}}>{gameSelected.lotteries[0].id}{gameSelected.lotteries[0].img.split('').length ** gameSelected.id}</Text>         
                                </View>                                 

                            </View>                                     
                        </View>                                         
                    </View>

                    <View style={{marginTop:50, width:'100%'}}>
                        <Text style={{fontSize:12,fontWeight:'bold'}}>Sorteo</Text>
                        <View style={{width:'100%',marginTop:20}}>
                            <Image source={{uri: !img ? gameSelected.lotteries[0].img : img}} 
                            style={{width:'100%', height:200,borderRadius:5}} resizeMode='contain' />
                        </View>
                        <View style={{marginLeft:'10%',width:'80%',marginTop:10}}>
                            <ScrollView horizontal style={{padding:10}}>
                                <TouchableHighlight style={{marginRight:10,width:50,height:50,}}
                                onPress={() => setImg(gameSelected.lotteries[0].img)} underlayColor={'white'} activeOpacity={0.7}>
                                <Image source={{uri: gameSelected.lotteries[0].img}} 
                                    style={{width:'100%', height:50,borderRadius:5}} resizeMode='contain' />
                                </TouchableHighlight>
                                
                                {
                                    gameSelected.lotteries[0].imagenes.length ? gameSelected.lotteries[0].imagenes.map((imagen, i) => {
                                        return (
                                            <TouchableHighlight key={i+1} style={{marginRight:10,width:50,height:50}}
                                            onPress={() => setImg(imagen.img)} underlayColor={'white'} activeOpacity={0.7}>
                                                <Image source={{uri: imagen.img}} 
                                                style={{width:'100%', height:50,
                                                borderRadius:5}} resizeMode='contain' />
                                            </TouchableHighlight>
                                        )
                                    })
                                    : null
                                }
                            </ScrollView>
                        </View>
                        <View style={{marginTop:40}}>
                            <Text style={{fontSize:20,color: '#666',fontWeight:100}}>{gameSelected.lotteries[0].name}</Text>
                            <Text style={{fontSize:12,color: '#666', marginTop:10}}>
                                {
                                    gameSelected.lotteries[0].description
                                }
                            </Text>
                            <View style={{marginTop:20}}>
                                <View style={{marginTop:10,flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                                    <Text style={{fontSize:12,fontWeight:'bold'}}>Valor del ticket</Text>              
                                    <Text style={{fontSize:12,color:'#666'}}>{new Intl.NumberFormat().format(gameSelected.lotteries[0].price)} COP</Text>         
                                </View> 
                            </View>
                        </View>

                        <View style={{marginTop:100}}>
                            <Text style={{fontSize:12,color: '#666',fontWeight:'bold'}}>Opciones</Text>
                            <View style={{marginTop:30, flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                
                                <TouchableHighlight style={{width:'30%', alignItems:'center', padding:10}}>
                                    <Ionicons name="cloud-download-outline" size={24} color="black" />   
                                </TouchableHighlight>
                                <TouchableHighlight style={{width:'30%', alignItems:'center', padding:10}}
                                onPress={Onshare} underlayColor={'white'} activeOpacity={0.2}>
                                    <Ionicons name="arrow-redo-outline" size={24} color="black" />   
                                </TouchableHighlight>
                                
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop:100,marginBottom:150}}>
                        <Image source={require('./../../../../../assets/img/NovaX.png')} style={{marginLeft: '25%',width:'50%',height:200}} 
                        resizeMode='contain' />
                        <Text style={{fontSize:12,color: '#666', textAlign:'center'}}>Más allá de la suerte, diseñando el futuro.</Text>
                    </View>

                    
                </View>
                
            </ScrollView>
        }
            
        {
            !gameSelected || loadingSelected == true ?  null
            :
            <View > 
                <Modal
                    animationType="slide"
                    transparent={true}
                    isVisible={shareModal}
                    onBackdropPress={() => setShareModal(false)}
                    style={{ justifyContent: 'flex-end', margin: 0 }}>
                    
                    <View style={{ flex: 0.2, backgroundColor: 'white', alignItems: 'center',borderTopLeftRadius:10,borderTopRightRadius:10 }}>
                        <View style={{width:'100%',padding:10}}>
                            <TouchableHighlight style={{width:'100%', padding:20, alignItems:'center',borderBottomWidth:.3,borderColor:'#ccc'}}
                            
                            onPress={Onshare} underlayColor={'white'} activeOpacity={0.2}>
                                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                                    <Ionicons name="arrow-redo-outline" size={22} color="#666" />
                                    <Text style={{marginLeft:20,fontSize:12,color: '#666'}}>Compartir</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    

                </Modal>
            </View>
        }

            
        </SafeAreaView>
    )
}