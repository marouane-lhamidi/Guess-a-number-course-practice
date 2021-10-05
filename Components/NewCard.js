import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Color from '../Constants/Colors'


const NewCard = props => {
    return(
        <View style={styles.numberForm}>
            <Text style={styles.numbe}>{props.children}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    numberForm : {
        borderWidth : 2,
        borderColor : Color.secondary,
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center',
        marginVertical : 10,
    },
    numbe : {
        fontSize : 20,
        color : Color.secondary,
        padding : 10,
    }
})

export default NewCard;

