import { StatusBar } from 'expo-status-bar';
import { Data } from './models/Data';
import { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView ,StyleSheet} from 'react-native'
import UserProfile from './components/UserProfile';


export default function App() {

  const [personaListas, setPersonasListas] = useState<Data[]>([]);

  useEffect(() => {
    setPersonasListas([
      { nombre: "Marlon", edad: 27, ciudad: "Tegucigalpa", ocupacion: "Agente Aduanero" },
      { nombre: "Alexander", edad: 25, ciudad: "San Pedro Sula", ocupacion: "Programador" },
       { nombre: "Roberto", edad: 62, ciudad: "Olancho", ocupacion: "Ingeniero" }, 
       { nombre: "Juan", edad: 50, ciudad: "San Pedro Sula", ocupacion: "Diseñador" },
       { nombre: "Andre", edad: 22, ciudad: "Tegucigalpa", ocupacion: "Marketing" }
    ]);
  }, []);

  return (
   <View style={styles.container}>
    <Text style={styles.text}>Listado De Personas</Text>
      <ScrollView >
        {personaListas.map((persona, index) => (
          <UserProfile key={index} user={persona} />
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#cccccc',
      alignItems: 'center',
      paddingTop:100,
      paddingHorizontal: 15,

    },
    text:{
      fontSize:20,
      fontWeight:"bold"
    }
  });

