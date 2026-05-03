
import { Data } from "../models/Data";
import UserHeader from "./UserHeader";
import UserDetails from "./UserDetails";
import { View, Text, FlatList, ScrollView ,StyleSheet} from 'react-native'

interface DatosPersonas {
  user: Data;
}

export default function UserProfile({ user }: DatosPersonas) {
  return (
    <View style={styles.itemContainer}>

      <UserHeader
      
        nombre={user.nombre} 
        ocupacion={user.ocupacion} 
      />

      <UserDetails 
        edad={user.edad} 
        ciudad={user.ciudad} 
      />

    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer:{
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  }
});