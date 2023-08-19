import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableHighlight, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
export default function Comision(props){
    const usuario = props.usuario;
    const profile = props.profile;


    const { navigate } = useNavigation();
    const [active, setActive] = useState('history');
    return (
        <SafeAreaView style={{marginTop:30,backgroundColor:'white'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between', padding:20}}>
                <TouchableHighlight style={{width:'10%'}} underlayColor={'white'} activeOpacity={0.7} 
                onPress={() => navigate('ProfileNovax')}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" />
                </TouchableHighlight>
            </View>
            <ScrollView>
                <View style={{marginLeft:'5%',width:'90%'}}>
                    <Text style={{fontSize:16,color: 'black',marginTop:10, fontWeight:'bold'}}>Tus comisiones</Text>
                    <View style={{marginTop:100}}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{fontSize:14,color: '#666'}}>Comisión total</Text>
                            <Text style={{fontSize:36,fontStyle:'italic', fontWeight:'bold',color: 'black',marginTop:10}}>
                                {
                                    new Intl.NumberFormat().format(profile.res.comisiones)
                                } 
                                <Text style={{fontSize:18}}> COP</Text></Text>
                        </View>
                        {
                            !profile.res.comision || profile.res.comisiones > 100000 ?
                            <TouchableHighlight style={{marginTop:50, padding:10,width:'100%',
                            borderTopWidth:.3,borderBottomWidth:.3, borderColor:'#ccc'}}>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                    <Ionicons name="pricetag-outline" size={20} color="#ccc" />
                                    <Text style={{fontSize:12,color: '#ccc'}}>Retirar mis comision</Text>
                                    <Text></Text>
                                </View>
                            </TouchableHighlight>
                            :
                            <TouchableHighlight style={{marginTop:50, padding:10,width:'100%',
                            borderTopWidth:1,borderBottomWidth:1, borderColor:'black'}}>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                    <Ionicons name="pricetag-outline" size={20} color="black" />
                                    <Text style={{fontSize:14, color: 'black'}}>Retirar mis comision</Text>
                                    <Text></Text>
                                </View>
                            </TouchableHighlight>
                        }
                    </View>
                    <View style={{marginTop:100}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                            <TouchableHighlight 
                            style={active == 'history' ? {width:'50%',padding:15,borderTopLeftRadius:5,
                            borderBottomLeftRadius:5,backgroundColor:'black'} : {width:'50%',padding:15}}
                            onPress={() => setActive('history')}
                            activeOpacity={0.7} underlayColor={active == 'history' ? 'black' : 'white'}>
                                <Text style={active == 'history' ? {textAlign:'center',color: 'white'} 
                                : {textAlign:'center',color: 'black'}}>Retiros</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={active == 'level' ? {width:'50%',padding:15,borderTopRightRadius:5,
                            borderBottomRightRadius:5,backgroundColor:'black'} : {width:'50%',padding:15}}
                            onPress={() => setActive('level')}
                            activeOpacity={0.7} underlayColor={active == 'level' ? 'black' : 'white'}>
                                <Text style={active == 'level' ? {textAlign:'center',color: 'white'} 
                                : {textAlign:'center',color: 'black'}}>Nivel y requisitos</Text>
                            </TouchableHighlight>
                        </View>
                        {
                            active == 'history' ?
                            <View style={{marginTop:40,marginBottom:150}}>
                                <Text style={{fontSize:14,color: '#666',fontWeight:'100'}}>
                                    Historial de retiros
                                </Text>
                                {
                                    profile.res.retiros.length ?
                                        profile.res.retiros.map((retiro, i) => {
                                            return (
                                                <TouchableHighlight key={i+1} style={{width:'100%',padding:20}}>
                                                    <View style={{width:'100%',flexDirection:'row', alignItems:'center'}}>
                                                        <View style={{width:'20%'}}>
                                                            <Ionicons name="analytics-outline" size={30} color="green" />
                                                        </View>
                                                        <View style={{marginLeft:10,width:'30%'}}>
                                                            <Text style={{fontSize:20,fontWeight:'100'}}>{retiro.valor}</Text>
                                                            <Text style={{fontSize:12,fontWeight:'100'}}>Entregado</Text>
                                                        </View>
                                                        <View style={{marginLeft:10, width:'50%', alignItems:'flex-end'}}>
                                                            <Text style={{fontSize:14,fontWeight:'100'}}>
                                                                {`${retiro.dia} de ${retiro.mes}`}
                                                            </Text>
                                                            <Text style={{fontSize:12,fontWeight:'100'}}>{retiro.metodo}</Text>
                                                        </View>
                                                    </View>
                                                </TouchableHighlight>
                                            )
                                        })
                                    :
                                    <View style={{marginTop:30}}>
                                        <View style={{padding:10}}>
                                            <Text style={{fontSize:12}}>No has realizado ningún retiro hasta el momento.</Text>
                                        </View>
                                    </View>
                                }
                            </View>
                            :
                            <View style={{marginTop:40,marginBottom:100}}>
                                <Text style={{fontSize:14,color: '#666',fontWeight:'100'}}>
                                    Nivel y requisitos
                                </Text>
                                <View style={{marginTop:30}}>
                                    <View style={{padding:10}}>
                                        <Text style={{fontSize:14,fontWeight:'300'}}>Kevin, actualmente eres nivel 1</Text>

                                        <Text style={{marginTop:10,fontSize:12}}>
                                            Cuando tu comisión sea igual o superior a 100.000COP, Podrás solicitar el retiro
                                            de todo tu dinero. 
                                        </Text>
                                        <View style={{marginTop:30,flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}}>
                                            <Text>Retirá a través de</Text>
                                            <View>
                                                <Text style={{fontWeight:'bold',fontSize:12}}>Nequi</Text>
                                                <Text style={{fontWeight:'bold',fontSize:12, marginTop:10}}>Daviplata</Text>
                                                <Text style={{fontWeight:'bold',fontSize:12, marginTop:10}}>Bancolombia</Text>
                                                <Text style={{fontWeight:'bold',fontSize:12, marginTop:10}}>Efectivo</Text>
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