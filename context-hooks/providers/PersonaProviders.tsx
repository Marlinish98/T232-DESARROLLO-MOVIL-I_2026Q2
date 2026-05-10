import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ViewProps } from '../models/ViewProps'
import { Personas } from '../models/Personas'
import { ContexPersona } from '../context/ContextPersona'

//props ReactNode 
//debemos darle funcionalidad al contexto y exportarlo
//exportar el contexto

export default function PersonasProviders(props: ViewProps) {

  const [listaPersonas, setListaPersonas] = useState<Personas[]>([])

  useEffect(() => {

    const timer = setTimeout(() => {

      const data: Personas[] = [
        { id: 1, nombre: "Marlon" },
        { id: 2, nombre: "Ana" },
        { id: 3, nombre: "Carlos" },
        { id: 4, nombre: "Eduardo" },
        { id: 5, nombre: "Andrea" },
        { id: 6, nombre: "Sindy" },
        { id: 7, nombre: "Roberto" },
        { id: 8, nombre: "Sebastian" },
        { id: 9, nombre: "Alexander" },
        { id: 10, nombre: "Eduardo" }

      ];

      setListaPersonas(data);

    }, 5000);

    return () => clearTimeout(timer);

  }, []);

  function agregarPersona(personas: Personas) {
    setListaPersonas([...listaPersonas, personas])
  }


  return (
    <View>
      <ContexPersona.Provider value={{ listaPersonas, agregarPersona }}>
        {props.children}
      </ContexPersona.Provider>
    </View>
  )
}

export const useContextPersona = () => {
  return useContext(ContexPersona)
}