import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './src/store/store';

import Welcomen from './src/components/welcomen/welcome';
import SignIn from './src/components/welcomen/signIn';
import SignUp from './src/components/welcomen/signUp';
import axios from 'axios';
import Novax from './src/components/novaX/NovaX';
import { useEffect } from 'react';
import * as actions from './src/store/actions/actions';

import * as SecureStore from 'expo-secure-store';

let server = true; 

let url = server ? "https://novax-production.up.railway.app" : "http://192.168.100.12:3000";
axios.defaults.baseURL =  url;
console.log(url)

// axios.defaults.baseURL =  "http://192.168.100.12:3000";


// new Date(`01-03-03`).toLocaleString('default', { month: 'long' }) --- Pieza de código para obtener el nombre del mes.
// new Intl.NumberFormat().format() --- Pieza de código para dar forma de tres digígos a los valores.


export default function App() {
  return (
      <Provider store={store}>
         <Listen /> 
      </Provider>
  );
}

 

function Listen(){ 
  const dispatch = useDispatch(); 
  const login = useSelector(store => store.usuario);

  
  const handleGetToken = async () => {
    const dataToken = await SecureStore.getItemAsync("token")
    if(!dataToken){
      console.log('No hay toquen');
    }else{
        dispatch(await actions.validateToken(dataToken));
    }  
  } 

  useEffect(() => {
    handleGetToken();
  }, [login.login])
   
  return (
      // Si esta logueado, mostramos el panel del saleperson
      login.login == true ? <Novax />
      // Log = Login                        signUp = Register
      :login.login == 'log' ? <SignIn /> : login.login == 'signUp' ? <SignUp />
      // Ninguna de las anterior, bienvido a NovaX
      : <Welcomen />  
           
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
