import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';
import Colors from "../Constants/Colors";

const MyButtonAndroid = props => {
    let Btn = TouchableOpacity ;

    if (Platform.Version >= 21){
        Btn = TouchableNativeFeedback;
    }

    return(
        <View style={styles.btnContainer}>
            <Btn onPress={props.onPress}>
                <View style={{...styles.button, ...props.style}}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>
            </Btn>
        </View>


    )
};

const styles = StyleSheet.create({
    btnContainer : {
        overflow : 'hidden',
        borderRadius : 25,
    },
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