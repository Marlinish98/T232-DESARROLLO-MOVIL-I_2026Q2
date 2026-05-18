import React from 'react'
import { View, Text,StyleSheet} from 'react-native'
import { useContextDatos } from '../providers/IMCProviders'

export default function Resultados() {

    const { totalIMC, categoria } = useContextDatos();

    return (

        <View style={styles.resultadoContainer}>

            <Text style={styles.resultadoTitulo}>
                Resultado IMC
            </Text>

            <Text style={styles.imcTexto}>
                IMC: {totalIMC.toFixed(2)}
            </Text>

            <Text style={styles.estadoTexto}>
                Estado: {categoria}
            </Text>

        </View>

    )
}

const styles = StyleSheet.create({

    resultadoContainer: {
        backgroundColor: '#ffffff',
        padding: 1,
        borderRadius: 12,
        alignItems: 'center',
        elevation: 4
    },

    resultadoTitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15
    },

    imcTexto: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10
    },

    estadoTexto: {
        fontSize: 20,
        fontWeight: '600',
        color: '#555'
    }

})