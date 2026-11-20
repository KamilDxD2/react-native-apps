import { StatusBar, StyleSheet, TouchableOpacity, Text, View, FlatList } from 'react-native';
import { React, useState, useEffect } from 'react'
import data from '../Settings.json';

import MyButton from '../components/MyButton';
import ListItem from '../components/ListItem';



const Screen2 = (props) => {
    const { navigation, route } = props
    const [list, onChangeList] = useState()

    useEffect(() => {
        Fetch()
    }, [])

    const Fetch = () => {
        fetch(`http://${data.ip}:${data.port}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                onChangeList(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const press = () => {
        navigation.navigate('s1')
    }


    return (
        <View style={styles.main}>
            <StatusBar />
            <MyButton color="#455A64" text="BACK TO LOGIN PAGE" press={press} tc={'#FFFFFF'} />
            <FlatList
                data={list}
                contentContainerStyle={{ gap: 10 }}
                renderItem={({ item, index }) => <ListItem item={item} index={index} func={Fetch} navigation={navigation} />}

            />
        </View>
    )


}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
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
});

export default Screen2