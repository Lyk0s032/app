import React from "react";
import { Image, Text, ScrollView, TouchableHighlight, View, SafeAreaView } from "react-native";

export default function Seller(props){
    const usuario = props.usuario;
    const sorteo = props.sorteo;

    const { lotteries } = sorteo;
    return (
            <SafeAreaView >
                <ScrollView style={{width:'100%'}}>
                    {
                        console.log(sorteo)
                    }
                    <View style={{width:'90%',marginLeft:'5%',marginBottom:150}}>
                        <View style={{marginTop:30}}>
                            <Text style={{fontSize:24,fontWeight:'300'}}>{lotteries[0].name}</Text>
                        </View>
                        

                        <View style={{marginTop:50}}>
                            <Text style={{fontWeight:'bold'}}>
                                Detalles para el vendedor
                            </Text>
                            <View style={{marginTop:30}}>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                                    <Text style={{fontSize:12}}>Comisión por venta:</Text>
                                    <Text style={{fontSize:18,fontWeight:'100'}}>{new Intl.NumberFormat().format(lotteries[0].comision)} COP</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                                    <Text style={{fontSize:12}}>Porcentaje:</Text>
                                    <Text style={{fontSize:18,fontWeight:'100'}}> 
                                        {
                                            lotteries[0].nivel == '1' ?
                                            `40%`
                                            : lotteries[0].nivel == '2' ?
                                            `50%`
                                            : lotteries[0].nivel == '3' ?
                                            `60%`
                                            :
                                            `40%`
                                        }
                                    </Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                                    <Text style={{fontSize:12}}>Último día de venta</Text>
                                    <Text style={{fontSize:18,fontWeight:'100'}}>{`${lotteries[0].finish.split('-')[0]} de ${new Date(`${lotteries[0].finish.split('-')[2]}-${lotteries[0].finish.split('-')[1] }-3`).toLocaleString('default', { month: 'long' })}`}</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                                    <Text style={{fontSize:12}}>Sorteo de nivel:</Text>
                                    <Text style={{fontSize:18,fontWeight:'bold'}}>{lotteries[0].nivel}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{marginTop:70}}>
                            <Text style={{fontWeight:'bold'}}>
                                Premios para vendedores
                            </Text>
                            <View style={{marginTop:30}}>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                                    <Text style={{fontSize:12}}>Por vender Nro ganador:</Text>
                                    <Text style={{fontSize:20,fontWeight:'100'}}>{new Intl.NumberFormat().format(lotteries[0].gift.nroGanador)} COP</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:20}}>
                                    <Text style={{fontSize:12}}>1er puesto:</Text>
                                    <Text style={{fontSize:18,fontWeight:'100'}}>{new Intl.NumberFormat().format(lotteries[0].gift.primero)} COP</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:20}}>
                                    <Text style={{fontSize:12}}>2do puesto</Text>
                                    <Text style={{fontSize:16,fontWeight:'100'}}>{new Intl.NumberFormat().format(lotteries[0].gift.segundo)} COP</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:20}}>
                                    <Text style={{fontSize:12}}>3er puesto:</Text>
                                    <Text style={{fontSize:14,fontWeight:'100'}}>{new Intl.NumberFormat().format(lotteries[0].gift.tercero)} COP</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{marginTop:60}}>
                            <Text style={{fontSize:12,color: '#666', textAlign:'center'}}>
                                Más allá de la suerte, diseñando el futuro.
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
    )
}