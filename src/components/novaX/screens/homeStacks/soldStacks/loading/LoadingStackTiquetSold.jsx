import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import SkeletonLoader from 'expo-skeleton-loader';


export default function LoadingStackTiquetSold(){
   return (
    <SafeAreaView style={{backgroundColor:'white'}}>
            <SkeletonLoader boneColor={'#e3e3e3'} highlightColor={'#f7f7f7'} duration={1000}>
                <SkeletonLoader.Container style={{width:'100%',borderRadius:10,marginRight:10, backgroundColor:'white'}}>

                        <SkeletonLoader.Container style={{marginTop:20,width:'90%',marginLeft:'5%', padding:10}}>
                            <SkeletonLoader.Container style={{width:'100%', maringTop:30, alignItems:'center'}}>
                                <SkeletonLoader.Item style={{width:'100%', height:50}}/>
                            </SkeletonLoader.Container>

                            <SkeletonLoader.Container style={{width:'100%', marginTop:50}}>
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