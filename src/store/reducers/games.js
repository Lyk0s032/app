import types from "../types"

let initialState = {
    // Juegos del vendedor.
    MyGames: null,
    loadingMyGames: false,

    // Juegos en la plataforma - Sorteos
    games: null,
    loadingGames: false,
    gameFiltered: null,

    // GAME TO SEE 
    sorteo: null,
    loadingSorteo:false,

    // Juegos historial pagos
    subscribed: null,
    loadingSubscribe: false,

    // WinnerGame
    winnerGame: null,
    loadingWinner: false,

    ticket: null,
    loadingTicket: false,

    profile: null,
    loadingProfile: false,
}
export default function (state = initialState, action) {
    switch (action.type) {
        // MIS JUEGOS
        case types.MY_GAMES:{
            return {
                ...state,
                MyGames: action.payload,
                loadingMyGames: false
            }
        }
        case types.LOADING_MY_GAMES:{
            return {
                ...state,
                loadingMyGames: action.payload
            }
        }

        // JUEGOS EN LA PLATAFORMA
        case types.GAMES:{
            return  {
                ...state,
                games: action.payload,
                loadingGames: false
            }
        }

        case types.LOADING_GAMES:{
            return {
                ...state,
                loadingGames: action.payload
            }
        }

        case types.GAME_FILTER:{
            return {
                ...state,
                gameFiltered: action.payload
            }
        }

        case types.SORTEO:{
            return {
                ...state,
                sorteo: action.payload,
                loadingSorteo: false
            }
        }
        case types.LOADING_SORTEO:{
            return {
                ...state,
                loadingSorteo: action.payload

            }
        }

        // Juegos Suscritos e información,
        case types.SUBSCRIBED:{
            return {
                ...state,
                subscribed: action.payload,
                loadingSubscribe: false
            }
        }
        
        case types.LOADING_SUBSCRIBED:{
            return {
                ...state,
                loadingSubscribe:action.payload
            }
        }

        // Juegos
        case types.WINNER_GAME: {
            return {
                ...state,
                winnerGame: action.payload,
                loadingWinner: false 
            }           
        }

        case types.LOADING_WINNER: {
            return {
                ...state,
                loadingWinner: action.payload,
            }           
        }

        // TIQUETES
        case types.TICKET: {
            return {
                ...state,
                ticket: action.payload,
                loadingTicket: false,
            }
        }
        case types.LOADING_TICKET: {
            return {
                ...state,
                loadingTicket: action.payload
            }
        }

        case types.PROFILE: {
            return {
                ...state,
                profile: action.payload,
                loadingProfile: false
            }
        }
        case types.LOADING_PROFILE:{
            return {
                ...state,
                loadingProfile: action.payload
            }
        }
        
        default:
            return {...state}
    }
}