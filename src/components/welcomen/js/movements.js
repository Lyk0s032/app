// Validemos que el movil este disponible

import axios from "axios";
import * as SecureStore from 'expo-secure-store';
const validateMovil = async (data) => {
    let movil = data.phone;
    const validating = await axios.get(`/app/validate/phone/${movil}`)
    .then((res) => {
        return res.status;
    })
    .catch((err) => {
        console.log(err);
        return null;
    })
    return validating;
}
const signUp = async (data,img) => {
    console.log(data);
    let body = {
        name: data.name,
        lastName: data.lastName,
        phone: data.phone,
        password: data.password,
        img:img
    }
    const create = await axios.post('/app/post/newSalesperson', body)
        .then(async (res) => {
            console.log(res)
            const token = await SecureStore.setItemAsync('token', res.data.data.token);
            return res;
        })
        
        .catch(err => {
            console.log('si hay error')
            console.log(err)
        });
    return create;
}
const showMessage = async (data )=> {
    console.log('hello');
    console.log(data);
}

const signIn = async (data) => {
    console.log(data);

    let body = {
        phone: data.phone,
        password: data.password
    }

     
    const login = await axios.post('/user/post/signIn/novax', body)
    .then(async res => {
        console.log(res);
        console.log('logueado');
        console.log('-----------------------------------------------------------')
        console.log(res.data.data);
        console.log('-----------------------------------------------------------')
        const token = await SecureStore.setItemAsync('token', res.data.data);
        console.log(token);
        return res;
    })
    .catch((err) => { 
        console.log(err);

        if(err.request.status == 404){
            return 404
        }else if(err.request.status == 401){
            return 401
        }else if(err.request.status == 500) {
            return 500
        }else {
            return 500
        }
    })

    return login;
}

export { showMessage, validateMovil, signUp, signIn}