import { View, Text, StyleSheet} from "react-native";
import { DataDetails } from "../models/DataDetails";

export default function UserDetails({ edad, ciudad }: DataDetails) {
  return (

     <View style={styles.container}>
          <Text>Detail</Text>
          <View style={styles.containerText}>
          <Text style={styles.itemText}>Edad: </Text>
          <Text>{edad}</Text>
          </View>
    
            <View style={styles.containerText}>
          <Text style={styles.itemText}>Ciudad: </Text>
          <Text>{ciudad}</Text>
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
    paddingTop:10
  },
  containerText: {
    flexDirection: "row",
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    color:'#007b46'
  },
});