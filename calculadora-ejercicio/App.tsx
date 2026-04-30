import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { calculateExercises } from './Component/exercise';


const ejemplo = calculateExercises([1, 0, 0, 4.5, 0, 3, 1], 2);
console.log(ejemplo);

export default function App() {


  return (
     <View style={styles.container}>
      <Text>Resultados:</Text>

      <Text>Días totales: {ejemplo.periodLength}</Text>
      <Text>Días de entrenamiento: {ejemplo.trainingDays}</Text>
      <Text>Objetivo: {ejemplo.target}</Text>
      <Text>Promedio: {ejemplo.average.toFixed(2)}</Text>
      <Text>Cumplio la meta: {ejemplo.success ? "Si" : "No"}</Text>
      <Text>Calificación: {ejemplo.rating}</Text>
      <Text>Retroalimentación: {ejemplo.ratingDescription}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
