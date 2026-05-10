import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useContextPersona } from '../providers/PersonaProviders'
import { Personas } from '../models/Personas'
import ListaUsuario from './ListaUsuario'


export default function FormularioPersonas() {

  const { listaPersonas, agregarPersona } = useContextPersona()

  const [nombre, setNombre] = useState<string>('')

  function agregar() {

    let personas: Personas = {
      id: listaPersonas.length + 1,
      nombre,

    }
    agregarPersona(personas)
    setNombre('')
    Alert.alert('Persona agregada correctamente')
  }

  useEffect(() => {
    console.log(listaPersonas)
  }, [listaPersonas])

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Formulario de Personas
      </Text>

      <TextInput
        placeholder='Nombre'
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
        placeholderTextColor="#999"
      />

      <View style={styles.boton}>
        <Button
          title='Agregar Persona'
          onPress={agregar}
          color="#007AFF" // Azul estilo iOS
        />
      </View>

      <View style={styles.lista}>
        <ListaUsuario />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 20,
    paddingTop: 70,
  },

  titulo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111',
    marginBottom: 25,
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#FFF',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },

  boton: {
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 25,
  },

  lista: {
    flex: 1,
  },

});