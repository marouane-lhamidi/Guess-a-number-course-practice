import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Color from '../Constants/Colors'

import TitleTex from "./TitleTex";

const Header = props => {
    return(
        <View style={{...styles.headerBase, ...Platform.select({ios : styles.headerIos, android : styles.headerAndroid})}}>
            <TitleTex style={styles.headerText}>{props.title}</TitleTex>
        </View>
    )
};

const styles = StyleSheet.create({
    headerBase: {
        width : '100%',
        height : 90,
        paddingTop : 20 ,
        justifyContent : 'center',
        alignItems : 'center',
    },
    headerIos : {
        backgroundColor : 'white',
        borderBottomColor : 'black',
        borderBottomWidth : 1 ,
    },
    headerAndroid : {
        backgroundColor :Color.Primary ,
        borderColor :Color.Primary,
        borderWidth :  0,
    },
    headerText : {
        color : Platform.OS === 'ios'? 'black' : 'white',
        fontSize : 30
    }
})

export default Header;

