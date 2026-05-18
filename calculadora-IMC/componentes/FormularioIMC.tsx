import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import { useContextDatos } from '../providers/IMCProviders'

export default function FormularioIMC() {

    const {
        peso,
        altura,
        modificadorAltura,
        modificadorPeso
    } = useContextDatos();

    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>
                Calculadora IMC
            </Text>

            {/* PESO */}
            <View style={styles.card}>

                <Text style={styles.label}>
                    Peso
                </Text>

                <Text style={styles.valor}>
                    {peso} KG
                </Text>

                <View style={styles.botones}>

                    <TouchableOpacity
                        style={styles.boton}
                        onPress={() => modificadorPeso(-1)}
                    >
                        <Text style={styles.textoBoton}>
                            -1 KG
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.boton}
                        onPress={() => modificadorPeso(1)}
                    >
                        <Text style={styles.textoBoton}>
                            +1 KG
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>

            {/* ALTURA */}
            <View style={styles.card}>

                <Text style={styles.label}>
                    Altura
                </Text>

                <Text style={styles.valor}>
                    {altura.toFixed(2)} M
                </Text>

                <View style={styles.botones}>

                    <TouchableOpacity
                        style={styles.boton}
                        onPress={() => modificadorAltura(-0.01)}
                    >
                        <Text style={styles.textoBoton}>
                            -1 CM
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.boton}
                        onPress={() => modificadorAltura(0.01)}
                    >
                        <Text style={styles.textoBoton}>
                            +1 CM
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 20,
        justifyContent: 'center',
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30
    },

    card: {
        backgroundColor: '#e8e8e8',
        padding: 20,
        borderRadius: 12,
        marginBottom: 20,
        elevation: 4
    },

    label: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10
    },

    valor: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#000000'
    },

    botones: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    boton: {
        width: '45%',
        backgroundColor: '#057f0b',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center'
    },

    textoBoton: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }

})