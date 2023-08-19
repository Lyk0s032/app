import React from "react";
import Navigation from "./navigation";
import { useSelector } from "react-redux";

export default function Novax(){

    const usuario = useSelector(store => store.usuario.user);
    return (
        usuario ?
        <Navigation usuario={usuario} />
        :null  
    )
}