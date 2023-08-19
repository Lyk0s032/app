import { combineReducers } from "redux";

import usuario from './usuario';
import games from "./games";



const appReducer = combineReducers({
    usuario,
    games
})

export default appReducer