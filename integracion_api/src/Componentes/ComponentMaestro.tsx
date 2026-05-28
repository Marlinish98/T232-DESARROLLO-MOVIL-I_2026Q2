import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IMaestros } from '../Modelo/IMaestro';

export default function ComponentMaestro() {

  const [ListaMaestros, setListaMaestros] = useState<IMaestros[]>([]);

  const [id_maestro, setId_maestro] = useState<number>(0);
  const [nombre_maestro, setNombre_maestro] = useState<string>('');
  const [materia, setmateria] = useState<string>("");
  const [seccion, setSeccion] = useState<string>("");
  const [correo, setCorreo] = useState<string>("");
  const [estado, setEstado] = useState<string>("");

  const [accion, setAccion] = useState<number>(0);


  async function obtenerListaMaestros() {

    const response = await fetch('http://localhost:5000/maestros');
    const data = await response.json();
    setListaMaestros(data.data);

  }


  async function guatdarMaestro() {


    if (accion === 0) {
      const response = await fetch('http://localhost:5000/maestros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre_maestro, materia, seccion, correo, estado }),
      });
    }
    else {
      const response = await fetch(`http://localhost:5000/maestros/${id_maestro}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre_maestro, materia, seccion, correo, estado }),
      });
    }



    obtenerListaMaestros();


    setNombre_maestro('');
    setmateria('');
    setSeccion('');
    setCorreo('');
    setEstado('');

  }

  useEffect(() => {
    obtenerListaMaestros();
  }, []);


  function editarMaestro(item: IMaestros) {

    setId_maestro(item.id_maestro);
    setNombre_maestro(item.nombre_maestro);
    setmateria(item.materia);
    setSeccion(item.seccion);
    setCorreo(item.correo);
    setEstado(item.estado.toString());
    setAccion(1);

  }

  async function eliminarMaestro(id: number) {

    const response = await fetch(`http://localhost:5000/maestros/${id_maestro}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    obtenerListaMaestros();

  }



  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Creacion lista Maestros</Text>

      <TextInput
        placeholder="Nombre del Maestro"
        value={nombre_maestro}
        onChangeText={setNombre_maestro}
        style={styles.input}
      />

      <TextInput
        placeholder="Materia"
        value={materia}
        onChangeText={setmateria}
        style={styles.input}
      />
      <TextInput
        placeholder="Seccion"
        value={seccion}
        onChangeText={setSeccion}
        style={styles.input}
      />
      <TextInput
        placeholder="Correo Electronico"
        value={correo}
        onChangeText={setCorreo}
        style={styles.input}
      />

      <TextInput
        placeholder="Estado"
        value={estado}
        onChangeText={setEstado}
        style={styles.input}
      />

      <View style={styles.botonGuardar}>
        <Button
          title="Guardar Maestro"
          onPress={() => guatdarMaestro()}
          color="#ffffff"
        />
      </View>

      <FlatList
        data={ListaMaestros}
        keyExtractor={(item) => item.id_maestro.toString()}
        renderItem={({ item }) =>
          <View style={styles.card}>

            <Text style={styles.texto}>Id: {item.id_maestro} </Text>
            <Text style={styles.texto}>Nombre Docente: {item.nombre_maestro}</Text>
            <Text style={styles.texto}>Materia: {item.materia}</Text>
            <Text style={styles.texto}>Seccion: {item.seccion}</Text>
            <Text style={styles.texto}>Correo: {item.correo}</Text>
            <Text style={styles.texto}>Estado{item.estado}</Text>

            <View style={styles.botones}>
              <View style={styles.botonList}>
                <Button
                  title="Editar Docente"
                  onPress={() => editarMaestro(item)}
                  color={"#fff"}
                />
              </View >
              <View style={styles.botonList}>
                <Button
                  title="Eliminar Docente"
                  onPress={() => eliminarMaestro(item.id_maestro)}
                  color={"#fff"}
                />
              </View>
            </View>

          </View>
        }
      />

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 15,
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#111827",
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },

  botonGuardar: {
    marginBottom: 20,
    backgroundColor: "#00ad11",
    borderRadius: 10
  },

  textoBoton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  card: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },

  texto: {
    fontSize: 16,
    color: "#374151",
    marginBottom: 10,
  },

  botones: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  botonList:{
    backgroundColor:"#0087ad",
    borderRadius:10
  }

});