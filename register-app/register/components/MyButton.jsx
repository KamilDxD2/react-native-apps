import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = (props) => {
    const { color, text, press, tc } = props

    const click = () => {
        press()
    }

    return (
        <TouchableOpacity style={[styles.btn, { backgroundColor: color }]} onPress={click}>
            <Text style={[styles.text, { color: tc }]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        padding: 10,
        margin: 10,
    },
    text: {
        fontWeight: 'bold',
        fontFamily: 'monospace',
        color: '#FFFFFF',
    }

});

export default MyButton;