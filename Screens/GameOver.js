import React from 'react';
import {View, Text, StyleSheet, Button, Image, Dimensions, ScrollView} from 'react-native';
import image from '../assets/success.png'

import Open from "../Components/Open";
import TitleTex from "../Components/TitleTex";
import Colors from "../Constants/Colors";
import MyButtonAndroid from "../Components/MyButton";

const GameOver = props => {
    return(
        <ScrollView>
            <View style={styles.screen}>
                <TitleTex>The Game Over !!!!!</TitleTex>
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image} />
                </View>
                <View style={styles.textContainer}>
                    <Open style={styles.texting}>
                        the phone find the number <Text style={styles.text}>{props.trueV}</Text> in <Text  style={styles.text}>{props.rounads}</Text> rounds.
                    </Open>
                </View>


                <MyButtonAndroid onPress={()=>{props.restore()}} >restart </MyButtonAndroid>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        padding : 10
    },
    imageContainer : {
      width:  Dimensions.get('window').width * 0.7,
      height: Dimensions.get('window').width * 0.7,
      borderRadius : Dimensions.get('window').width * 0.7 / 2,
      borderWidth : 3,
      borderColor : 'black',
      overflow : 'hidden',
      marginVertical : Dimensions.get('window').width > 350 ? 30 : 15
    },
    image : {
        width : '100%',
        height : '100%'
    },
    texting : {
        textAlign : 'center',
        fontSize: Dimensions.get('window').width > 350 ? 20 : 16
    },
    textContainer : {
        marginHorizontal : 50,
        marginBottom : 10,
    },
    text : {
        color : Colors.Primary,
        fontSize : 15
    }

})

export default GameOver;