import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableHighlight, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Entregas(props){
    const usuario = props.usuario;
    const myGames = props.myGames;
    const { navigate } = useNavigation();
    const [active, setActive] = useState('history');

    const profile = props.profile;

    return (
        <SafeAreaView style={{marginTop:30,backgroundColor:'white'}}>
            {
                console.log(profile)
            }
            <View style={{flexDirection:'row',justifyContent:'space-between', padding:20}}>
                <TouchableHighlight style={{width:'10%'}} underlayColor={'white'} activeOpacity={0.7} 
                onPress={() => navigate('ProfileNovax')}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" />
                </TouchableHighlight>
            </View>
            <ScrollView>
                <View style={{marginLeft:'5%',width:'90%'}}>
                    <Text style={{fontSize:16,color: 'black',marginTop:10, fontWeight:'bold'}}>Vendido</Text>
                    <View style={{marginTop:100}}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{fontSize:14,color: '#666'}}>Valor</Text>
                            <Text style={{fontSize:36,fontStyle:'italic', fontWeight:'bold',color: 'black',marginTop:10}}>
                                {new Intl.NumberFormat().format(profile.res.dinero)} <Text style={{fontSize:18}}>COP</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={{marginTop:100}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                            <TouchableHighlight 
                            style={active == 'history' ? {width:'50%',padding:15,borderTopLeftRadius:5,
                            borderBottomLeftRadius:5,backgroundColor:'black'} : {width:'50%',padding:15}}
                            onPress={() => setActive('history')}
                            activeOpacity={0.7} underlayColor={active == 'history' ? 'black' : 'white'}>
                                <Text style={active == 'history' ? {textAlign:'center',color: 'white'} 
                                : {textAlign:'center',color: 'black'}}>Entregas</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={active == 'level' ? {width:'50%',padding:15,borderTopRightRadius:5,
                            borderBottomRightRadius:5,backgroundColor:'black'} : {width:'50%',padding:15}}
                            onPress={() => setActive('level')}
                            activeOpacity={0.7} underlayColor={active == 'level' ? 'black' : 'white'}>
                                <Text style={active == 'level' ? {textAlign:'center',color: 'white'} 
                                : {textAlign:'center',color: 'black'}}>Fecha</Text>
                            </TouchableHighlight>
                        </View>
                        {
                            active == 'history' ?
                            <View style={{marginTop:40,marginBottom:150}}>
                                <Text style={{fontSize:14,color: '#666',fontWeight:'100'}}>
                                    Historial de entregas
                                </Text>
                                <View style={{marginTop:20}}>
                                {
                                    profile.res.entregas.length  ?
                                        profile.res.entregas.map((entrega, i) => {
                                            return (
                                                <TouchableHighlight key={i+1} style={{width:'100%',padding:20}}>
                                                    <View style={{width:'100%',flexDirection:'row', alignItems:'center'}}>
                                                        <View style={{width:'20%'}}>
                                                            <Ionicons name="analytics-outline" size={30} color="green" />
                                                        </View>
                                                        <View style={{marginLeft:10,width:'30%'}}>
                                                            <Text style={{fontSize:20,fontWeight:'100'}}>{new Intl.NumberFormat().format(entrega.valor)}</Text>
                                                            <Text style={{fontSize:12,fontWeight:'100'}}>Entregado</Text>
                                                        </View>
                                                        <View style={{marginLeft:10, width:'50%', alignItems:'flex-end'}}>
                                                            <Text style={{fontSize:14,fontWeight:'100'}}>
                                                                {`${entrega.dia} de ${entrega.mes}`}
                                                            </Text>
                                                            <Text style={{fontSize:12,fontWeight:'100'}}>{entrega.metodo}</Text>
                                                        </View>
                                                    </View>
                                                </TouchableHighlight>
                                            )
                                        })
                                    :
                                    <View style={{marginTop:30}}>
                                        <View style={{padding:10}}>
                                            <Text style={{fontSize:12}}>No has realizado ninguna entrega hasta el momento.</Text>
                                        </View>
                                    </View>
                                }
                                </View>
                            </View>
                            :
                            <View style={{marginTop:40,marginBottom:100}}>
                                <Text style={{fontSize:14,color: '#666',fontWeight:'100'}}>
                                    Fecha de próxima entrega
                                </Text>
                                <View style={{marginTop:30}}>
                                    <View style={{padding:10}}>
                                        <Text style={{fontSize:14,fontWeight:'300'}}>Kevin, la próxima entrega será</Text>
                                        <Text style={{marginTop:10,fontWeight:'bold'}}> Jueves 01 de Agosto </Text>
                                        <Text style={{marginTop:10}}> O </Text>
                                        <Text style={{marginTop:10,fontWeight:'bold'}}> Viernes 02 de Agosto </Text>

                                        
                                        <View style={{marginTop:30,flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}}>
                                            <Text>Envio a través de: </Text>
                                            <View>
                                                <Text style={{fontWeight:'bold',fontSize:12}}>Efectivo</Text>
                                                <Text style={{fontWeight:'bold',fontSize:12, marginTop:10}}>Daviplata</Text>
                                                <Text style={{fontWeight:'bold',fontSize:12, marginTop:10}}>Bancolombia</Text>
                                                <Text style={{fontWeight:'bold',fontSize:12, marginTop:10}}>Nequi</Text>
                                            </View>
                                        </View>
                                        <Text style={{marginTop:100,fontSize:14,fontWeight:'100'}}>
                                            Muy pronto te habilitaremos la posibiidad de invertir en el mercado empresarial a través 
                                            de las comisiones.
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        }
                    </View>
                </View>
            </ScrollView> 
        </SafeAreaView>
    )
}