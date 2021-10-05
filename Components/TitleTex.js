import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => {
    return(
        <Text style={{...styles.header, ...props.style} } >{props.children}</Text>
    )
};

const styles = StyleSheet.create({
    header : {
        fontSize : 20,
        fontFamily : 'open-sans-bold'
    }
})

export default Header;