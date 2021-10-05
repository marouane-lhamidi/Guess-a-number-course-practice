import React from 'react';
import {TextInput , StyleSheet} from 'react-native';

const Input = props => {
    return(
        <TextInput {...props} style={{...styles.Input, ...props.style}} />
    )
};

const styles = StyleSheet.create({
    Input : {
        height : 30,
        marginVertical : 20,
        borderBottomColor : 'gray',
        borderBottomWidth : 1,
    }
})

export default Input;