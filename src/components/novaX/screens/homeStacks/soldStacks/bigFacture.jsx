import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as actions from './../../../../../store/actions/actions';
import SkeletonLoader from 'expo-skeleton-loader';

export default function BigFacture(props){
    const usuario = props.usuario;
    const dispatch = useDispatch();
    const ticket = useSelector(store => store.games.ticket);
    const loadingTicket = useSelector(store => store.games.loadingTicket);
    const route = useRoute();
    useEffect(() => {
        if(ticket){
            if(ticket.id != route.params.ticket){
                dispatch(actions.axiosGetTicketGame(route.params.ticket,true))
            }
        }else{
            if(!loadingTicket){
                dispatch(actions.axiosGetTicketGame(route.params.ticket,true))
            } 
        }
    }, [])  
    return (
        ticket && loadingTicket == false ?
        <View style={{backgroundColor:'white'}}>
            <ScrollView>
                <View style={{marginLeft:'5%',width:'90%',marginTop:10}}>
                    <Text style={{fontSize:14,fontWeight:'bold',color: '#666'}}>Factura</Text>
                </View>
                <View style={{alignItems:'center',marginTop:30}}>
                    <Ionicons name="checkmark" size={40} color="green" />
                    <View style={{marginTop:30,alignItems:'center'}}>
                        <Text style={{fontSize:30,fontWeight:100}}>Factura</Text>
                        <Text style={{marginTop:10,color: '#666'}}>{ticket.nameUser}</Text>
                        <Text style={{marginTop:10,color: '#666',fontSize:10}}>{ticket.phoneUser}</Text>
                    </View>
                    <View style={{marginTop:30,paddingTop:10,borderTopWidth:0.3,borderColor:'#666',width:'100%'}}>
                        <View style={{width:'90%',marginLeft:'5%',marginTop:10}}>
                            <Text style={{fontWeight:'bold',color: '#666'}}>Detalles</Text>
                            <View style={{marginTop:10,padding:10}}>
                                <View style={{marginTop:10, flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
                                    <Text style={{fontSize:12}}>Fecha</Text>
                                    <Text style={{fontSize:12,fontWeight:'bold'}}>{`${ticket.dia} de ${new Date(`${ticket.year}-${ticket.mes}-3`).toLocaleString('default', { month: 'long' })}`}</Text>
                                </View>
                                <View style={{marginTop:10, flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
                                    <Text style={{fontSize:12}}>Referencia</Text>
                                    <Text style={{fontSize:12,fontWeight:'100'}}>{ticket.reference}</Text>
                                </View>
                                <View style={{marginTop:10, flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
                                    <Text style={{fontSize:12}}>Vendido por</Text>
                                    <Text style={{fontSize:12,fontWeight:'bold'}}>
                                        {ticket.salesperson ? ticket.salesperson.name : null}
                                    </Text>
                                </View>
                                <View style={{marginTop:10, flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
                                    <Text style={{fontSize:12}}>Total</Text>
                                    <Text style={{fontSize:12,fontWeight:'bold'}}>{new Intl.NumberFormat().format(ticket.valor)} COP</Text>
                                </View>
                                <View style={{marginTop:10, flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
                                    <Text style={{fontSize:12}}>Cantidad de números</Text>
                                    <Text style={{fontSize:12,fontWeight:'bold'}}>{ticket.nros}</Text>
                                </View>

                                <View style={{marginTop:30,borderTopWidth:.3,borderColor:'#ccc', paddingTop:20}}>
                                    <Text style={{fontSize:12,fontWeight:'bold'}}>Números</Text>
                                    
                                    <View style={{marginTop:30,alignItems:'center'}}>
                                        {
                                            ticket.numeros && ticket.numeros.length ?
                                                ticket.numeros.map((numero,i) => {
                                                    return (
                                                        <View key={i+1} style={{padding:10}}>
                                                            <Text style={{fontSize:24,color: '#666',fontStyle:'italic',fontWeight:200}}>{numero.numero}</Text>
                                                        </View>
                                                    )
                                                } )
                                            :
                                            <View>
                                                <Text style={{fontSize:12,color: '#666'}}>No hay números registrados</Text>
                                            </View>
                                        }
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
        :
        <View>
            <SkeletonLoader boneColor={'#e3e3e3'} highlightColor={'#f7f7f7'} duration={1000}>
                <SkeletonLoader.Container style={{width:'100%',borderRadius:10,marginRight:10, backgroundColor:'white'}}>
                        <SkeletonLoader.Container style={{marginTop:30,width:'100%',padding:10}}>
                            <SkeletonLoader.Container style={{width:'100%', maringTop:30, alignItems:'center'}}>
                                <SkeletonLoader.Item style={{width:'50%', height:60}}/>
                                <SkeletonLoader.Item style={{width:'50%',height:10,marginTop:5}}/>
                                <SkeletonLoader.Item style={{width:'50%',height:20,marginTop:5}}/>
                            </SkeletonLoader.Container>
                            <SkeletonLoader.Container style={{marginTop:50,padding:2,width:'100%'}}>
                                <SkeletonLoader.Container style={{marginTop:20, padding:2,width:'100%'}}>
                                    <SkeletonLoader.Item style={{width:'50%', height:20}}/>
                                </SkeletonLoader.Container> 
                                <SkeletonLoader.Container style={{marginTop:20,flexDirection:'row',justifyContent:'space-between',
                                alignContent:'center', padding:2,width:'100%'}}>
                                    <SkeletonLoader.Item style={{width:'40%', height:20}}/>
                                    <SkeletonLoader.Item style={{width:'40%',height:20,marginTop:5}}/>        
                                </SkeletonLoader.Container> 

                                <SkeletonLoader.Container style={{marginTop:5,flexDirection:'row',justifyContent:'space-between',
                                alignContent:'center', padding:2,width:'100%'}}>
                                    <SkeletonLoader.Item style={{width:'20%', height:10}}/>
                                    <SkeletonLoader.Item style={{width:'40%',height:10,marginTop:5}}/> 
                                </SkeletonLoader.Container> 
                                <SkeletonLoader.Container style={{marginTop:5,flexDirection:'row',justifyContent:'space-between',
                                alignContent:'center', padding:2,width:'100%'}}>
                                    <SkeletonLoader.Item style={{width:'20%', height:10}}/>
                                    <SkeletonLoader.Item style={{width:'40%',height:10,marginTop:5}}/>     
                                </SkeletonLoader.Container>
                                <SkeletonLoader.Container style={{marginTop:20,flexDirection:'row',justifyContent:'space-between',
                                alignContent:'center', padding:2,width:'100%'}}>
                                    <SkeletonLoader.Item style={{width:'20%', height:20}}/>
                                    <SkeletonLoader.Item style={{width:'40%',height:20,marginTop:5}}/>        
                                </SkeletonLoader.Container> 
 
                            </SkeletonLoader.Container> 

                            <SkeletonLoader.Container style={{marginTop:30, alignItems:'center'}}>
                                <SkeletonLoader.Item style={{width:'50%',height:200, borderRadius:5}} />
                            </SkeletonLoader.Container>
                        </SkeletonLoader.Container>
                </SkeletonLoader.Container>
            </SkeletonLoader>
        </View>
    )
}