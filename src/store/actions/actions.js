import axios from "axios";
import store from "../store";
import types from "../types";
import * as SecureStore from 'expo-secure-store';



// Función para redirigir al login.
export function toLogin(log){

    return {
        type: types.LOGIN,
        payload: log
    }
}

export function closingSesion(){
    return function(dispatch){
        const close = async () => {
            const a = await SecureStore.deleteItemAsync('token');
        }
        close()
        setTimeout(() => {
            dispatch(toLogin(null))
            dispatch(toUser(null));
            dispatch(MY_GAMES(null))
        }, 4000);
    }
}
export function toUser(user){
    return {
        type: types.USER,
        payload: user
    }
}

export async function validateToken(t){
    const token = await SecureStore.getItemAsync('token');
    let config = {
          headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${t}`
          }
      } 
    
    return  function(dispatch){
        axios.get('/app/signIn/', config)
        .then((info) => {
            if(info.status == 200){
                dispatch(toLogin(true));
                return dispatch(toUser(info.data.user.user));
            } 
        })
        .catch((e) => {
            console.log('erro33r');
            console.log(e);
        });
    }
}


export function getAvatars(data){
    return {
        type: types.AVATARS,
        payload: data
    }
}
export function axiosToAvatars(){
    return function(dispatch){
        axios.get(`/app/avatars`)
        .then((info) => info.data)
        .then(inf => {
            console.log(inf);
            return dispatch(getAvatars(inf))
        })
        .catch((e) => {
            if(e.request){
                return dispatch(getAvatars('notrequest'));
            }else{
                return dispatch(getAvatars(404))
                
            }
        });
    }
}

// MY GAMES
export function MY_GAMES(data){
    return {
        type: types.MY_GAMES,
        payload: data
    }
}
export function LOADING_MY_GAMES(value){
    return {
        type: types.LOADING_MY_GAMES,
        payload: value
    }
} 
export function axiosToGetMyGames(countId, carga){
    return function(dispatch){
        dispatch(LOADING_MY_GAMES(carga))
        axios.get(`/app/salesperson/${countId}`)
        .then((info) => info.data)
        .then(inf => {
            return dispatch(MY_GAMES(inf))
        })  
        .catch((err) => {
            console.log(err);
            if(err.request.status == 404){
                return dispatch(MY_GAMES(404))
                
            }else if(err.request.status == 500){
                return dispatch(MY_GAMES('notrequest'));
            }else{
                console.log('Ninguno de los dos');
                return dispatch(MY_GAMES('notrequest'));

            }
        });
    }
}




// GAMES

export function GAMES(data){
    return {
        type: types.GAMES,
        payload: data
    }
}
export function LOADING_GAMES(value){
    return {
        type: types.LOADING_GAMES,
        payload: value
    }
}
export function GAME_FILTER(array, level){
    const nuevo = array.filter((item) => item.nivel != level)
    return {
        type: types.GAME_FILTER,
        payload: nuevo 
    }
}
export function axiosToGetGames(countId, carga){
    return function(dispatch){
        dispatch(LOADING_GAMES(carga))
        axios.get(`/app/games/${countId}`)
        .then((info) => info.data)
        .then(inf => {
            return dispatch(GAMES(inf))
        })
        .catch((e) => {
            console.log(e);
            if(e.request){
                return dispatch(GAMES('notrequest'));
            }else{
                return dispatch(GAMES(404))
                
            }
        });
    }
}

// SORTEO
export function SORTEO(data){
    return {
        type: types.SORTEO,
        payload: data
    }
}
export function LOADING_SORTEO(carga){
    return {
        type: types.LOADING_SORTEO,
        payload: carga
    }
}
export function axiosGetSorteo(sorteo, usuario, carga){
    return function (dispatch){
        dispatch(LOADING_SORTEO(carga))
        axios.get(`/app/game/${sorteo}/${usuario}`)
        .then((info) => info.data)
        .then(inf => {
            return dispatch(SORTEO(inf))
        })
        .catch((e) => {
            if(e.request){
                return dispatch(SORTEO('notrequest'));
            }else{
                return dispatch(SORTEO(404))
                
            }
        });
    }
}


// OBTENER JUEGOS SUSCRITOS AL VENDEDOR
export function SUBSCRIBED(data){
    return {
        type: types.SUBSCRIBED,
        payload: data
    }
}
export function LOADING_SUBSCRIBED(carga){
    return {
        type: types.LOADING_SUBSCRIBED,
        payload: carga
    }
}

export function axiosGetSuscribe(usuario, carga){
    return function (dispatch){
        dispatch(LOADING_SORTEO(carga))
        axios.get(`/app/games/salesperson/history/${usuario}`)
        .then((info) => info.data)
        .then(inf => {
            return dispatch(SUBSCRIBED(inf))
        })
        .catch((e) => {
            if(e.request){
                return dispatch(SUBSCRIBED('notrequest'));
            }else{
                return dispatch(SUBSCRIBED(404))
                
            }
        });
    }
}

// OBTENER GAME DESDE EL VENDEDOR
export function WINNER_GAME(data){
    return {
        type: types.WINNER_GAME,
        payload: data
    }
}
export function LOADING_WINNER(carga){
    return {
        type: types.LOADING_WINNER,
        payload: carga
    }
}

export function axiosGetWinnerGame(usuario,sorteo, carga){
    return function (dispatch){
        dispatch(LOADING_WINNER(carga))
        axios.get(`/app/games/winner/${usuario}/${sorteo}`)
        .then((info) => info.data)
        .then(inf => {
            return dispatch(WINNER_GAME(inf))
        })
        .catch((e) => {
            if(e.request){
                return dispatch(WINNER_GAME('notrequest'));
            }else{
                return dispatch(WINNER_GAME(404))
                
            }
        });
    }
}


// TIQUETES 
// OBTENER FACTURA DE TIQUETE
export function TICKET(data){
    return {
        type: types.TICKET,
        payload: data
    }
}
export function LOADING_TICKET(carga){
    return {
        type: types.LOADING_TICKET,
        payload: carga
    }
}
// Consumimos api para obtener la factura.
export function axiosGetTicketGame(ticket,carga){
    return function (dispatch){
        dispatch(LOADING_TICKET(carga))
        axios.get(`/app/lottery/ticket/get/${ticket}`)
        .then((info) => info.data)
        .then(inf => {
            console.log(inf);
            return dispatch(TICKET(inf))
        })
        .catch((e) => {
            if(e.request){
                return dispatch(TICKET('notrequest'));
            }else{
                return dispatch(TICKET(404))
                
            }
        });
    }
}


// PROFILE
export function PROFILE(data){
    return {
        type: types.PROFILE,
        payload: data
    }
}
export function LOADING_PROFILE(carga){
    return {
        type: types.LOADING_PROFILE,
        payload: carga
    }
}
// Consumimos api para obtener el perfil.
export function axiosGetProfile(usuario,carga){
    return function (dispatch){
        dispatch(LOADING_PROFILE(carga))
        axios.get(`/app/money/get/${usuario}`)
        .then((info) => info.data)
        .then(inf => {
            return dispatch(PROFILE(inf))
        })
        .catch((e) => {
            if(e.request){
                return dispatch(LOADING_PROFILE('notrequest'));
            }else{
                return dispatch(LOADING_PROFILE(404))
                
            }
        });
    }
}