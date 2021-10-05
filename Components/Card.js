import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
    return(
        <View style={{...styles.inputContainer, ...props.style}}>{props.children}</View>
    )
};

const styles = StyleSheet.create({
    inputContainer : {
        shadowColor: 'black',
        shadowOffset: {width : 0, height : 2},
        shadowOpacity:  0.25,
        shadowRadius: 6,
        elevation : 10,
        padding: 20,
        backgroundColor: 'white',
        borderRadius : 10,
    }
})

export default Card;