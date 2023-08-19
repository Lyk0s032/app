import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Sold(props){
    const { navigate } = useNavigation();
    const subscribed = props.subscribed;
    return (
        <SafeAreaView style={{backgroundColor:'white'}}>
            <View style={{marginTop:30, padding:20,backgroundColor: 'white', flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                <TouchableHighlight style={{padding:5}} onPress={() => navigate('HomeNovax')}
                            underlayColor={'white'} activeOpacity={0.7}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableHighlight>
                <Text>Kevin</Text>
                <Text></Text>
                
            </View>
            <ScrollView>
                <View style={{width:'90%',marginLeft:'5%', marginTop:60,borderBottomWidth:.3,borderColor:'#ccc',paddingBottom:60}}>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Mis ventas</Text>

                    <View style={{marginTop:50, alignItems:'center'}}>
                        <Text style={{fontSize:12,color: '#666'}}>Total</Text>
                        <Text style={{fontSize:30,marginTop:10}}>{new Intl.NumberFormat().format(subscribed.dinero)} <Text style={{fontSize:12}}>COP</Text></Text>
                    </View>
                </View>
                <View style={{marginLeft:'5%',width:'90%',marginTop:40}}>
                    <Text style={{fontSize:14,fontWeight:'bold',color: '#666'}}>Sorteos</Text>
                    <View style={{marginTop:30}}>
                        {
                            subscribed && subscribed.lotteries.length ?
                            subscribed.lotteries.map((lottery, i) => {
                                return (
                                    <TouchableHighlight key={i+1} style={{marginTop:10, padding:10,borderBottomWidth:.3,borderColor:'#ccc'}} 
                                        onPress={() => navigate('HomeTicketNovax', {tiquete:lottery})} underlayColor={'white'} activeOpacity={0.7}>
                                        <View>
                                            <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}} >
                                                <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-start'}}>
                                                    <Image source={{uri: 'https://discolmotos.com/wp-content/uploads/2021/03/blanca_right_45.png'}} style={{width:70, height:70,
                                                    borderRadius:5}}
                                                    resizeMode='contain' />
                                                    <View style={{marginLeft:10}}>
                                                        <Text style={{fontSize:16}}>{lottery.name}</Text>
                                                        {
                                                            lottery.winner || lottery.state == 'finish' ?
                                                                <Text style={{fontSize:12,color: '#666'}}>{`Jugó el ${lottery.finish.split('-')[0]} de ${lottery.finish.split('-')[1]} `}</Text>
                                                            :
                                                                <Text style={{fontSize:12,color: '#666'}}>{`Hasta el ${lottery.finish.split('-')[0]} de ${lottery.finish.split('-')[1]} `}</Text>
                                                        }
                                                    </View>
                                                </View>
                                                <View>
                                                    <Text style={{textAlign:'center',fontSize:12,color: '#666'}}>Nivel</Text>
                                                    <Text style={{textAlign:'center',color: 'black'}}>{lottery.nivel}</Text>
                                                </View>
                                            </View>

                                            <View style={{width:'100%',marginTop:10, flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}} >
                                                <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-start'}}>
                                                    {
                                                        lottery.state == 'finish' || lottery.winner ?
                                                        <Text style={{fontSize:12,color: 'black'}}>Finalizó</Text>
                                                        : 
                                                        <Text style={{fontSize:12,color: 'green'}}>Abierto</Text>
                                                    }
                                                </View>
                                                <View>
                                                    <Text style={{textAlign:'center',color: 'black',fontSize:12,color: '#666'}}>{lottery.numeros.length} vendidas</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableHighlight>
  
                                )
                            })
                            : null
                        }
  
                    </View>
                </View>
                <View style={{marginTop:100,marginBottom:150}}>
                    <Image source={require('./../../../../assets/img/NovaX.png')} style={{marginLeft: '25%',width:'50%',height:200}} 
                    resizeMode='contain' />
                    <Text style={{fontSize:12,color: '#666', textAlign:'center'}}>Más allá de la suerte, diseñando el futuro.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}