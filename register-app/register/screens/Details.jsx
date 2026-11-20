import { StatusBar, StyleSheet, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { React, useState, useEffect } from 'react'

import FontAwesome from '@expo/vector-icons/FontAwesome';


const Screen3 = (props) => {
    const { navigation, route } = props
    let obj = route.params.item
    let date = new Date(obj.timestamp).toISOString().slice(0, 19).replace('T', ' ')
    return (
        <View style={styles.main}>
            <StatusBar />
            <View style={styles.box1}>
                <View style={styles.box1_1}>
                    <FontAwesome name="user-circle-o" size={180} color="#455A64" />
                </View>
            </View>
            <View style={styles.box2}>
                <View style={styles.box2_1}>
                    <Text style={styles.txt1}>Login</Text>
                    <Text style={styles.txt2}>{obj.name}</Text>
                </View>
                <View style={styles.box2_1}>
                    <Text style={styles.txt1}>Password</Text>
                    <Text style={styles.txt2}>{obj.password}</Text>
                </View>
                <View style={styles.box2_1}>
                    <Text style={styles.txt1}>Registered</Text>
                    <Text style={styles.txt2}>{date}</Text>
                </View>

            </View>
        </View>
    )


}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    box1: {
        flex: 1,
        backgroundColor: '#757575',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 300,
        borderColor: '#455A64',
        margin: 20,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    box1_1: {
        backgroundColor: '#BDBDBD',
        padding: 39,
        borderRadius: '50%',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,

    },
    box2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CFD8DC',
        gap: 35,
        borderTopEndRadius: '25%',
        borderTopWidth: 1,
        borderRightWidth: 0.5,

    },
    box2_1: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    txt1: {
        flex: 1,
        backgroundColor: '#FFC107',
        textAlign: 'center',
        width: 100,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: '#212121',
        borderBottomWidth: 1.5,
        borderTopWidth: 1.5,

    },
    txt2: {
        backgroundColor: '#BDBDBD',
        padding: 10,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: '#212121',
        borderRadius: 10,
        borderLeftWidth: 2,
        marginRight: 15,
    },


});

export default Screen3