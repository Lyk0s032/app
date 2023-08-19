import types from "../types"

let initialState = {
    login: false,
    user: null,
    avatars: null
}
export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOGIN:{
            return {
                ...state,
                login: action.payload
            }
        }
        case types.USER:{
            return {
                ...state,
                user: action.payload
            }
        }
        case types.AVATARS:{
            return  {
                ...state,
                avatars: action.payload
            }
        }
        default:
            return {...state}
    }
}