import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useContextPersona } from '../providers/PersonaProviders'

export default function ListaUsuario() {

  const { listaPersonas } = useContextPersona()
  
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.titulo}>
        Lista de Personas
      </Text>

      <View style={styles.header}>
        <Text style={[styles.headerText, styles.idColumn]}>
          ID
        </Text>

        <Text style={[styles.headerText, styles.nombreColumn]}>
          Nombre
        </Text>
      </View>

      <FlatList
        data={listaPersonas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.fila}>
            
            <Text style={[styles.textoFila, styles.idColumn]}>
              {item.id}
            </Text>

            <Text style={[styles.textoFila, styles.nombreColumn]}>
              {item.nombre}
            </Text>

          </View>
        )}
      />

    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    marginTop: 10,
  },

  titulo: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
    color: '#1C1C1E',
    textAlign:'center'
  },

  header: {
    flexDirection: 'row',
    backgroundColor: '#004793',
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  headerText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },

  fila: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },

  textoFila: {
    fontSize: 16,
    color: '#1C1C1E',
  },

  idColumn: {
    width: 70,
  },

  nombreColumn: {
    flex: 1,
  },

})