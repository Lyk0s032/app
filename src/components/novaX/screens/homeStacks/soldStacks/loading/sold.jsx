import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SkeletonLoader from 'expo-skeleton-loader';

export default function LoadingSold(props){
    const { navigate } = useNavigation();
    return (
        <SafeAreaView style={{backgroundColor:'white'}}>

            <View style={{marginTop:30, padding:20,backgroundColor: 'white', flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                <TouchableHighlight style={{padding:5}} onPress={() => navigate('HomeNovax')}
                            underlayColor={'white'} activeOpacity={0.7}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableHighlight>
                <Text>Ventas</Text>
                <Text></Text>
                
            </View>
            <SkeletonLoader boneColor={'#e3e3e3'} highlightColor={'#f7f7f7'} duration={1000}>
                <SkeletonLoader.Container style={{width:'100%',borderRadius:10,marginRight:10, backgroundColor:'white'}}>
                        <SkeletonLoader.Container style={{width:'90%', marginLeft:'5%', marginTop:80}}>
                                <SkeletonLoader.Item style={{width:'50%', height:20}}/>
                        </SkeletonLoader.Container>
                        <SkeletonLoader.Container style={{marginTop:20,width:'90%',marginLeft:'5%', padding:10}}>
                            <SkeletonLoader.Container style={{width:'100%', maringTop:30, alignItems:'center'}}>
                                <SkeletonLoader.Item style={{width:'50%', height:60}}/>
                                <SkeletonLoader.Item style={{width:'50%',height:10,marginTop:5}}/>
                                <SkeletonLoader.Item style={{width:'50%',height:20,marginTop:5}}/>
                            </SkeletonLoader.Container>

                            <SkeletonLoader.Container style={{width:'100%', marginTop:80}}>
                                <SkeletonLoader.Item style={{width:'50%', height:20}}/>
                            </SkeletonLoader.Container>
                            <SkeletonLoader.Container style={{marginTop:10,padding:2,width:'100%'}}>
                                <SkeletonLoader.Container style={{padding:2,width:'100%'}}>
                                    <SkeletonLoader.Item style={{width:'100%', height:80}}/>
                                </SkeletonLoader.Container>  

                                <SkeletonLoader.Container style={{marginTop:5,flexDirection:'row',justifyContent:'space-between',
                                alignContent:'center', padding:2,width:'100%'}}>
                                    <SkeletonLoader.Item style={{width:'20%', height:10}}/>
                                    <SkeletonLoader.Item style={{width:'40%',height:10,marginTop:5}}/>     
                                </SkeletonLoader.Container>
                    
 
                            </SkeletonLoader.Container> 

                            <SkeletonLoader.Container style={{marginTop:10,padding:2,width:'100%'}}>
                                <SkeletonLoader.Container style={{padding:2,width:'100%'}}>
                                    <SkeletonLoader.Item style={{width:'100%', height:80}}/>
                                </SkeletonLoader.Container>  

                                <SkeletonLoader.Container style={{marginTop:5,flexDirection:'row',justifyContent:'space-between',
                                alignContent:'center', padding:2,width:'100%'}}>
                                    <SkeletonLoader.Item style={{width:'20%', height:10}}/>
                                    <SkeletonLoader.Item style={{width:'40%',height:10,marginTop:5}}/>     
                                </SkeletonLoader.Container>
                    
 
                            </SkeletonLoader.Container> 

                            
                        </SkeletonLoader.Container>
                </SkeletonLoader.Container>
            </SkeletonLoader>
        </SafeAreaView>
    )
}