import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Open = props => {
    return(
        <Text style={{...styles.header, ...props.style} } >{props.children}</Text>
    )
};

const styles = StyleSheet.create({
    header : {
        fontFamily : 'open-sans'
    }
})

export default Open;