import { View, Text,StyleSheet } from "react-native";
import {DataHeader} from "../models/DataHeader"

export default function UserHeader({ nombre, ocupacion }: DataHeader) {
  return (
    <View style={styles.container}>
    <Text>Header</Text>
      <View style={styles.containerText}>
      <Text style={styles.itemText}>Nombre: </Text>
      <Text>{nombre}</Text>
      </View>

        <View style={styles.containerText}>
      <Text style={styles.itemText}>Ocupacion: </Text>
      <Text>{ocupacion}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
  },
  containerText: {
    flexDirection: "row",
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});