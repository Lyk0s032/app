import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

export default function SmallFacture(props){
    const tiquete = props.ticket;
    const valor = props.valor;
    const { navigate } = useNavigation();
    return (
        <TouchableHighlight style={{paddingTop:10, paddingBottom:10}} onPress={() => navigate('FactureTopTapNovax', {ticket: tiquete.id})}
        activeOpacity={0.7} underlayColor={'white'}>
            
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',justifyContent:'flex-end', alignItems:'center'}}>
                    
                    <View style={{marginLeft:10}}>
                        <Text style={{fontWeight:'400'}}>{tiquete.nameUser}</Text>
                        <Text style={{fontSize:10,color: '#666'}}>{tiquete.phoneUser}</Text>
                    </View>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <Text style={{textAlign:'right',fontSize:10,color: '#666',fontStyle:'italic'}}>{`${tiquete.dia} de ${tiquete.mes}`}</Text>
                    <Text style={{fontSize:14,color: 'green',fontWeight:300}}>{new Intl.NumberFormat().format(Number(valor) * Number(tiquete.nros))} <Text style={{fontSize:12}}>COP</Text></Text>
                    <Text style={{fontSize:12,color: '#666',fontWeight:300}}>{tiquete.nros} Números</Text>
                </View>
            </View>
            
        </TouchableHighlight>
    )
}