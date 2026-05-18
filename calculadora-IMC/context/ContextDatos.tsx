import { createContext } from "react";
import { DatosUsuario } from "../modelos/DatosUsuario";

export const contextDatos = createContext({
    peso: 0,
    altura: 0,
    totalIMC: 0,
    categoria:"",
    modificadorPeso:(alteracion:number) => {},
    modificadorAltura:(alteracion:number) => {},
});
