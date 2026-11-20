import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import data from '../Settings.json';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import MyButton from './MyButton';

const ListItem = (props) => {
    const { item, index, func, navigation } = props;

    const Details = () => {
        navigation.navigate('s3', { item: item })
    }

    const Delete = () => {
        fetch(`http://${data.ip}:${data.port}/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: item,
            }),
        })
            .then(response => response.json())
            .then(data => {
                func()
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }



    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <FontAwesome name="user-circle-o" size={84} color="#BDBDBD" />
                <Text style={styles.index}>{index}</Text>
            </View>
            <View style={styles.box2}>
                <View style={styles.box3}>
                    <MyButton color="#FFC107" text="DETAILS" press={Details} tc={'#212121'} />
                    <MyButton color="#FFC107" text="DELETE" press={Delete} tc={'black'} />
                </View>
                <View style={styles.box4}>
                    <View style={styles.box5}>
                        <Text style={styles.text}>Name: {item.name}</Text>
                    </View>
                </View>

            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 130,
        width: 350,
        flexDirection: 'row',
    },
    box1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#607D8B',
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,

        borderBlockColor: '#FFFFFF',
        borderWidth: 5,
    },
    box2: {
        flex: 2,
        alignItems: 'center',
    },
    box3: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        backgroundColor: '#607D8B',
    },
    box4: {
        flex: 1,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 23,

        width: '100%',

        zIndex: 1,

    },
    box5: {
        zIndex: 2,
        backgroundColor: '#CFD8DC',
        borderRadius: 50,
        padding: 10,
    },
    text: {
        fontSize: 14,
        fontFamily: 'monospace',
        display: 'flex',
    },
    index: {
        position: 'absolute',
        top: 75,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: '#757575',
    }
});

export default ListItem;