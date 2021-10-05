import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from "../Constants/Colors";

const MyButtonAndroid = props => {

    return(

            <TouchableOpacity onPress={props.onPress}>
                <View style={{...styles.button, ...props.style}}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>
            </TouchableOpacity>



    )
};

const styles = StyleSheet.create({
    button : {
        marginVertical : 10,
        backgroundColor : Colors.Primary,
        borderRadius : 25,
        paddingHorizontal : 20,
        justifyContent : 'center',
        alignItems : 'center',
        height : 45
    },
    buttonText : {
        fontSize : 15,
        fontFamily : 'open-sans-bold',
        color : 'white',
    }
})

export default MyButtonAndroid;