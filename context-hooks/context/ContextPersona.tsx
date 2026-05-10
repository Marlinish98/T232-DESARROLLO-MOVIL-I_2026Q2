

import { Personas } from "../models/Personas";
import { createContext } from "react";

export const ContexPersona = createContext({
    listaPersonas: [] as Personas[],
    agregarPersona: (personas: Personas) => { }
})