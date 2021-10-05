import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableNativeFeedback,
    Keyboard,
    Alert,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from 'react-native';



import Color from '../Constants/Colors'
import Card from "../Components/Card";
import Input from "../Components/Input";
import NewCard from "../Components/NewCard";
import TitleTex from "../Components/TitleTex";
import Open from "../Components/Open";
import MyButtonAndroid from "../Components/MyButton";

const StartGame = props => {
    const [enterValue, setEnterValue] = useState('');
    const [finaleValue, setFinalValue] = useState();
    const [confirmed, setConfirmed] = useState(false);
    const [newWidth, setNewWidth] = useState( Dimensions.get('window').width / 4);


    useEffect(()=>{
        const updateWidth = () => {
            setNewWidth(Dimensions.get('window').width / 4)
        }
        Dimensions.addEventListener('change', updateWidth);
        return () => {
            Dimensions.removeEventListener('change', updateWidth);
        }
    })


    const onclickfun = e => {
        setEnterValue(e.replace(/[^0-9]/g, ''))
    }
    const returnFunction = () => {
        Keyboard.dismiss();
    }
    const reset = () =>{
        setEnterValue('');
        setConfirmed(false);
    }
    const confirm = () =>{
        let numb =parseInt(enterValue);
        if (isNaN(numb) || numb <=0 || numb >99) {
            Alert.alert('No valid number', 'you enter a no valid number', [{text : 'okey', onPress : reset, style : 'destructive'}])
            return;
        }
        setEnterValue('');
        setFinalValue(numb);
        setConfirmed(true);
    }
    let NewComponent;


    if (confirmed) {
        NewComponent =
            <Card style={styles.newCard}>
                <Text>You selected </Text>
                <NewCard>{finaleValue}</NewCard>
                <MyButtonAndroid onPress={() => {props.getting(finaleValue)}} >START</MyButtonAndroid>
            </Card>
    }

    return(
        <ScrollView>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>

                <TouchableNativeFeedback onPress={returnFunction} >
                    <View style={styles.screen}>
                        <TitleTex style={styles.title}>Start The Game</TitleTex>
                        <Card  style={styles.InpuText}>
                            <Open>Send a number</Open>
                            <Input
                                style={styles.Input}
                                blurOnSubmit
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="number-pad"
                                maxLength={2}
                                onChangeText={onclickfun}
                                value={enterValue}
                            />
                            <View style={styles.Buttons} >
                                <View style={{width : newWidth}}>
                                    <Button title="Reset" onPress={reset} color={Color.secondary}/>
                                </View>
                                <View  style={{width : newWidth}} >
                                    <Button title="Confirm" onPress={confirm} color={Color.Primary}/>
                                </View>
                            </View>
                        </Card>
                        {NewComponent}
                    </View>
                </TouchableNativeFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        padding : 10,
        alignItems : 'center',
    },
    title : {
        marginVertical : 10,

    },
    InpuText : {
        width : '80%',
        // maxWidth : '80%',
        minWidth : 300,
        maxWidth : '95%',
        alignItems: 'center',
    },
    Buttons : {
        flexDirection : 'row',
        width: '100%',
        justifyContent : 'space-between',
        paddingHorizontal : 15
    },
    // Butto : {
    //     // width : '40%',
    //     width : Dimensions.get('window').width / 4
    // },
    Input : {
        width : 50,
        textAlign : 'center',
    },
    newCard : {
        marginTop : 30,
        alignItems : 'center',
        justifyContent:  'center',
    }
})

export default StartGame;