import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ComponentMaestro from './src/Componentes/ComponentMaestro';

export default function App() {
  return (
    <View style={styles.container}>
      
      <ComponentMaestro/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:50,
    paddingHorizontal:30
  },
});
