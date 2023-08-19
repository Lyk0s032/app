import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Game(props){
    const usuario = props.usuario;
    const subscribed = props.subscribed;
    const { navigate } = useNavigation();
    const [filterActive,setFilterActive] = useState(subscribed.lotteries ? subscribed.lotteries.filter(sorteo => sorteo.state == 'active') : null)

    return (
        <SafeAreaView style={{backgroundColor:'white'}}>
 
            <View style={{marginTop:30, padding:20,backgroundColor: 'white', flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                <TouchableHighlight style={{padding:5}} onPress={() => navigate('HomeNovax')}
                            underlayColor={'white'} activeOpacity={0.7}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableHighlight>
                <Text>Mis sorteos</Text>
                <Text></Text>
                
            </View>
            <ScrollView style={{paddingBottom:150}}>
                <View style={{width:'90%',marginLeft:'5%', marginTop:20,paddingBottom:10}}>
                    <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{width:'50%', alignItems:'center'}}>
                            <Image source={{uri: `http:192.168.100.12:3000/app/avatars/read/profile/${usuario.imgProfile}`}}  
                            style={{width:'70%',height:100}} resizeMode="contain" />
                        </View>
                        <View style={{width:'50%'}}> 
                            <Text style={{fontWeight:'bold'}}>{subscribed.name}</Text>
                            <Text style={{fontSize:12,color: '#666'}}>Sorteos en los que he participado y mi nivel.</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{padding:10, marginTop:20, flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                            <TouchableHighlight style={{width:'30%'}} >
                                <View style={{alignItems:'center'}}>
                                    <Text style={{fontWeight:'bold', fontStyle:'italic'}}>{filterActive ? filterActive.length : 0}</Text>
                                    <Text style={{fontSize:12,color: '#666',textAlign:'center'}}>Sorteos activos</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={{width:'30%'}} >
                                <View style={{alignItems:'center'}}>
                                    <Text style={{fontWeight:'bold', fontStyle:'italic'}}>{subscribed.lotteries ? subscribed.lotteries.length : 0}</Text>
                                    <Text style={{fontSize:12,color: '#666'}}>Total</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={{width:'30%'}} >
                                <View style={{alignItems:'center'}}>
                                    <Text style={{fontWeight:'bold', fontStyle:'italic'}}>{usuario.nivel}</Text>
                                    <Text style={{fontSize:12,color: '#666'}}>Mi nivel</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{marginTop:20}}>
                        <Text style={{marginTop:20,fontSize:12, color: '#666' }}>Sorteos</Text>
                        <View style={{marginTop:40}}>
                            {
                                subscribed &&  subscribed.lotteries.length ? 
                                subscribed.lotteries.map((lottery, i) => {
                                    return (
                                        <TouchableHighlight key={i+1} style={{marginTop:20}} onPress={() => {
                                            navigate('WinnerNovax', {sorteoId: lottery.id})
                                        }} 
                                         activeOpacity={0.7} underlayColor={'white'}>
                                            <View style={{ borderBottomWidth:.3,borderColor:'#ccc',padding:10}}>
                                                <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>

                                                    <View style={{width:'50%',flexDirection:'row',justifyContent:'flex-start', alignItems:'center'}}>
                                                        <View>
                                                            <Image source={{uri: 'https://discolmotos.com/wp-content/uploads/2021/03/blanca_right_45.png'}} style={{width:70, height:70,
                                                                borderRadius:5}}
                                                                resizeMode='contain' />
                                                        </View>
                                                        <View>
                                                            <Text style={{fontWeight:'bold'}}>{lottery.name}</Text>
                                                            <Text style={{fontSize:12,color: '#666'}}>
                                                                {`Juega el ${lottery.finish.split('-')[0]} de ${lottery.finish.split('-')[1]}`} 
                                                            </Text>
                                                        </View>
                                                    </View>
                                                    <View>
                                                        <TouchableHighlight>
                                                            <Ionicons name="arrow-forward" size={24} color="black" />
                                                        </TouchableHighlight>
                                                    </View>
                                                </View>
                                                <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                                                    <Text></Text>

                                                    {
                                                        lottery.state == 'finish' || lottery.winner ?
                                                            <Text style={{fontSize:12,color: '#666'}}>Finalizó</Text>
                                                        :
                                                            <Text style={{fontSize:12,color: 'green'}}>Abierto</Text>
                                                    }
                                                    
                                                </View>
                                            </View>
                                        </TouchableHighlight>
                                    )
                                })
                            : 
                            <View>
                                <Text>No hay sorteos aun.</Text>
                            </View>
                            }

                           
                        </View>
                    </View>

                    <View style={{marginTop:100,marginBottom:150}}>
                        <Image source={require('./../../../../../assets/img/NovaX.png')} style={{marginLeft: '25%',width:'50%',height:200}} 
                        resizeMode='contain' />
                        <Text style={{fontSize:12,color: '#666', textAlign:'center'}}>Más allá de la suerte, diseñando el futuro.</Text>
                    </View>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}