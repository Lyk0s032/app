import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import * as actions from './../../../../../store/actions/actions';
const changePassword = async (pass, user) => {
    try {
    let body = {
        password: pass,
        salespersonId: user
    }
    const tryToChange  = axios.put('/user/put/password', body)
    .then((res) => {
        if(res.status == 200){
            return true
        }
    })
    .catch(err => {
        console.log('Error en el intento de cambiar la contraseña');
        return false;
    })
    
        
    }catch(err){
        console.log(err)
        return false
    }
}
export { changePassword }