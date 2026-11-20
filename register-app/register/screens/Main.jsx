import { StatusBar, StyleSheet, TouchableOpacity, Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { React, useState } from 'react'
import data from '../Settings.json';

import MyButton from "../components/MyButton"

const Screen1 = (props) => {
    const { navigation } = props
    const [name, onChangeName] = useState('');
    const [password, onChangePassword] = useState('');

    const press = () => {
        fetch(`http://${data.ip}:${data.port}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                password: password,
                timestamp: new Date().getTime()
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.status == 0) {
                    alert(data.message)
                }
                else {
                    navigation.navigate('s2')
                }
                // 
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <View style={styles.main}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.Box1}>
                <View style={styles.Box1_1}>
                    <Text style={styles.MainText}>Register App</Text>
                    <Text style={styles.SecondaryText}>Sign in to continue</Text>
                </View>
            </View>
            <View style={styles.Box2}>
                <View style={styles.Box2_1}>
                    <TextInput style={styles.input} value={name} onChangeText={onChangeName} cursorColor={'#455A64'} placeholder='Name' keyboardType="visible-password" maxLength={15}></TextInput>
                    <TextInput style={styles.input} value={password} onChangeText={onChangePassword} cursorColor={'#455A64'} placeholder='Password' maxLength={15} secureTextEntry={true}></TextInput>
                    <MyButton color="#455A64" text="REGISTER" press={press} tc={'#FFFFFF'} />
                </View>
                <View style={styles.Box2_2}>

                </View>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Box1: {
        flex: 1,
        backgroundColor: '#CFD8DC',
        zIndex: 1,
    },
    Box1_1: {
        flex: 1,
        backgroundColor: '#607D8B',

        alignItems: 'center',
        justifyContent: 'space-evenly',
        zIndex: 2,

        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    Box2: {
        flex: 3,
        backgroundColor: '#CFD8DC',
    },
    Box2_1: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Box2_2: {
        flex: 1,
    },
    button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 10,
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 20
    },
    MainText: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Segoe UI',
        color: '#FFFFFF',
    },
    SecondaryText: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Segoe UI',
        color: '#BDBDBD',
    },
    input: {
        width: '40%',
        padding: 10,
        margin: 10,
        borderBottomWidth: 1,
        borderRadius: 5,
        borderBottomColor: '#455A64',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: '#212121',
        textAlign: 'center',
    }
});

export default Screen1