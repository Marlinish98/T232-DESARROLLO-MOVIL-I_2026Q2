import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FormularioIMC from './componentes/FormularioIMC';
import IMCProviders from './providers/IMCProviders';
import Resultados from './componentes/Resultados';

export default function App() {
  return (
    <View style={styles.container}>
      <IMCProviders>
        <FormularioIMC/>
        <Resultados/>
      </IMCProviders>
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
