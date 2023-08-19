import React from "react";
import { View, Text, Image, TouchableHighlight} from "react-native";
import darkLogo from '../../assets/img/NovaX-White.png';
import { useDispatch } from "react-redux";
import * as actions from '../../store/actions/actions';
export default function Welcomen(props){
    const dispatch = useDispatch();
    return(
        <View >
            <View style={{width:'100%',height:'50%',marginTop:100}}>
                <Image source={darkLogo} style={{width:'100%', height:'100%'}} resizeMode="contain" />
            </View>
            <View style={{width:'90%', marginLeft:'5%',marginTop:10}}>
                <TouchableHighlight activeOpacity={0.7} underlayColor={'black'} style={{
                    width:'100%',borderRadius:10,backgroundColor:'black', padding:14,textAlign:'center'}} onPress={() => {
                        dispatch(actions.toLogin('log'));
                    }}>
                    <Text style={{textAlign:'center',color: 'white',fontSize:14}} >Acceder</Text>
                </TouchableHighlight>

                <TouchableHighlight activeOpacity={0.7} underlayColor={'white'} style={{
                    width:'100%',borderRadius:10, borderWidth:1,marginTop: 10,borderColor:'#ccc', padding:14,textAlign:'center'}}
                    onPress={() => {
                        dispatch(actions.toLogin('signUp'));
                    }}>
                    <Text style={{textAlign:'center', color: '#ccc'}}>Crear cuenta</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}