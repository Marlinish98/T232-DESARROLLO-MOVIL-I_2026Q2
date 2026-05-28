import { createContext } from "react";
import { IMaestros } from "../Modelo/IMaestro";

export const ContextMaestro = createContext({
    maestros:[] as IMaestros[],
    guardarmaestro:()=>{},
    editarMaestro:()=>{},
    eliminarMaestro:()=>{}
})