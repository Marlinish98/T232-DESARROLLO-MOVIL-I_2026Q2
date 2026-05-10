import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PersonasProviders from './providers/PersonaProviders';
import FormularioPersonas from './component/FormularioPersonas';

export default function App() {
  return (
    <View style={styles.container}>
       <PersonasProviders>
      <FormularioPersonas/>
       </PersonasProviders>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
