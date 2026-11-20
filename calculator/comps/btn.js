import { StatusBar, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import React from 'react'

const btn = (props) => {
    const { name, type, pressed, orientation, theme } = props

    const getButtonStyle = (name) => {
        if ((name == 'CE') || (name == '/') || (name == '*') || (name == '-') || (name == '+')) {
            return [styles.operationBc, styles.operationTxt];
        }
        else if ((name == 'C') || (name == '=')) {
            if (!theme) {
                return [styles.theme, styles.theme];
            }
            else {
                return [styles.operationBc2,];
            }

        }
        else if ((name == 'Sin') || (name == 'Cos') || (name == 'Tan') || (name == 'Pow') || (name == 'Sqrt')) {
            return [!orientation ? styles.operationBc3 : styles.operationBc3H, styles.operationTxt];
        }
        else if (!theme) {
            return [styles.theme, styles.operationTxt];
        }
    };

    const Press = () => {
        pressed(name)
    }

    return (
        <TouchableOpacity style={[styles.btn, getButtonStyle(name)?.[0], style(orientation).btn]} onPress={Press}>
            <Text style={[styles.txt, getButtonStyle(name)?.[1]]}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: '17%',
        height: '17%',
        backgroundColor: 'white',
        borderRadius: 30,
    },
    txt: {
        fontSize: 30,
        fontWeight: '500',
    },
    operationBc: {
        backgroundColor: 'blue',
    },
    operationBc2: {
        backgroundColor: '#d1d1d1',
    },
    operationBc3: {
        backgroundColor: 'mediumslateblue',
    },
    operationBc3H: {
        backgroundColor: 'mediumslateblue',
        display: 'none'
    },
    theme: {
        backgroundColor: '#1b1b1b',
        color: 'gray',
    },
    operationTxt: {
        color: 'white',
    },

});

const style = (x) => StyleSheet.create({
    btn: {
        width: x ? "21%" : "17%",
    },
});


export default btn