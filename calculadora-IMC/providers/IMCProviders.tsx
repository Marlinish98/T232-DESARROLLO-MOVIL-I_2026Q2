import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ViewProps} from '../modelos/ViewProps'
import { DatosUsuario } from '../modelos/DatosUsuario'
import { contextDatos } from '../context/ContextDatos'

export default function IMCProviders(props:ViewProps){

const[peso,setPeso] = useState<number>(73);
const[altura,setAltura] = useState<number>(1.68);
const[totalIMC,setTotalIMC]=useState<number>(0);
const[categoria,setCageoria] = useState<string>('');

function modificadorPeso(alteracion:number){
    setPeso(prev => prev + alteracion);
}

function modificadorAltura(alteracion:number){
    setAltura(prev => prev + alteracion);
}

useEffect(() => {

        const formula = peso / (altura * altura);
        setTotalIMC(formula);
        if(formula < 18.5){

            setCageoria("Bajo peso");

        }else if(formula >= 18.5 && formula <= 24.9){

            setCageoria("Peso normal");

        }else if(formula >= 25 && formula <= 29.9){

            setCageoria("Sobrepeso");

        }else{
            setCageoria("Obesidad");
        }

    }, [peso, altura]);

return(
    <View>
        <contextDatos.Provider value={{
                peso,
                altura,
                totalIMC,
                categoria,
                modificadorPeso,
                modificadorAltura,}}>
        {props.children}
        </contextDatos.Provider>
    </View>
)
}

export const useContextDatos =()=>{
    return useContext(contextDatos)
}