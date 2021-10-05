import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Alert, ScrollView, FlatList, Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NewCard from "../Components/NewCard";
import Card from "../Components/Card";
import TitleTex from "../Components/TitleTex";
import MyButtonAndroid from "../Components/MyButton";
import Open from "../Components/Open";

const  getRandomInt = (min, max, ourNumber) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let random =  Math.floor(Math.random() * (max - min)) + min;
    if (random === ourNumber)
        return getRandomInt(min, max, ourNumber)
    return random;
}
const newItem = (length, val) => {
    return (
        <View style={styles.listItem}>
            <Open > #{length - val.index} </Open>
            <Open > {val.item} </Open>
        </View>

    )
}

const GameScreen = props => {
    const {update, ourVal} = props;
    const initial = getRandomInt(1, 100, ourVal );
    const [randomNum, setRandomNum] = useState(initial);
    const lower = useRef(1);
    const greater = useRef(100);
    const [lastGuess, setLastGuess] = useState([initial.toString()]);
    const [dimensionWidth, setDimensionWidth] = useState(Dimensions.get('window').width);
    const [dimensionHeight, setDimensionHeight] = useState(Dimensions.get('window').height);


    useEffect(()=>{
        const updateDimension = () => {
            setDimensionWidth(Dimensions.get('window').width);
            setDimensionHeight(Dimensions.get('window').height);
        }

        if (randomNum === ourVal) {
            update(lastGuess.length);
        }

        Dimensions.addEventListener('change', updateDimension);

        return () => {
            Dimensions.removeEventListener('change', updateDimension)
        }
    }, [randomNum, ourVal, update])
    const guidNumber = direction => {
        if ((direction === 'lower' && randomNum < ourVal) || (direction === 'greater' && randomNum > ourVal)){
            Alert.alert('you are Lier', 'you don\'t do right guid', [{text : 'ok', style : 'cancel'}]);
            return;
        }
        if (direction === 'lower')
            greater.current = randomNum;
        else
            lower.current = randomNum + 1;

        const newNum =getRandomInt(lower.current, greater.current, randomNum);
        setRandomNum(newNum);
        // setRounds(current => current + 1 );
        setLastGuess([newNum.toString(), ...lastGuess])

    }
    if (Dimensions.get('window').height < 500)
    {
        return (        <View style={styles.screen}>
                <TitleTex > Opponent's Guess </TitleTex>
                <View style={styles.newContainerLook}>
                    <MyButtonAndroid onPress={() =>{guidNumber('lower')}} > <Ionicons name="md-remove" size={24} color='white'/> </MyButtonAndroid>
                    <NewCard >{randomNum}</NewCard>
                    <MyButtonAndroid onPress={() =>{guidNumber('greater')}} > <Ionicons name="md-add" size={24} color='white'/> </MyButtonAndroid>
                </View>

                <View style={styles.itemContainer}>
                    {/*<ScrollView contentContainerStyle={styles.itemContent}>*/}
                    {/*    {*/}
                    {/*        lastGuess.map((guess, index) => newItem(guess, lastGuess.length - index) )*/}
                    {/*    }*/}
                    {/*</ScrollView>*/}
                    <FlatList
                        keyExtractor={item => item}
                        data={lastGuess}
                        renderItem={newItem.bind(this, lastGuess.length)}
                        contentContainerStyle={styles.itemContent}
                    />
                </View>

            </View>
        )
    }

    return(
        <View style={styles.screen}>
            <TitleTex > Opponent's Guess </TitleTex>
            <NewCard >{randomNum}</NewCard>
            <Card style={styles.Buttons}>
                <MyButtonAndroid onPress={() =>{guidNumber('lower')}} > <Ionicons name="md-remove" size={24} color='white'/> </MyButtonAndroid>
                <MyButtonAndroid onPress={() =>{guidNumber('greater')}} > <Ionicons name="md-add" size={24} color='white'/> </MyButtonAndroid>
            </Card>
            <View style={styles.itemContainer}>
                {/*<ScrollView contentContainerStyle={styles.itemContent}>*/}
                {/*    {*/}
                {/*        lastGuess.map((guess, index) => newItem(guess, lastGuess.length - index) )*/}
                {/*    }*/}
                {/*</ScrollView>*/}
                <FlatList
                    keyExtractor={item => item}
                    data={lastGuess}
                    renderItem={newItem.bind(this, lastGuess.length)}
                    contentContainerStyle={styles.itemContent}
                />
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        padding : 10,
        alignItems : 'center',
    },
    Buttons : {
        flexDirection : 'row',
        width : 400,
        maxWidth : '80%',
        justifyContent : 'space-between',
        marginTop : Dimensions.get('window').width > 350 ? 20 : 5,

    },
    itemContent : {
        flexGrow : 1,
        justifyContent : 'flex-end',
    },
    itemContainer : {
        flex: 1,
        width: Dimensions.get('window').width > 350 ? '70%' : '50%',
    },
    newContainerLook : {
        flexDirection : 'row',
        alignItems : 'center',
        width : '80%',
        justifyContent : 'space-around'
    },
    listItem : {
        flexDirection: 'row',
        justifyContent : 'space-between',
        padding: 5,
        borderWidth : 1,
        borderColor : '#ccc',
        marginVertical : 10,
        width : '100%',
        height: 50,
        alignItems: 'center'
    }
})

export default GameScreen;