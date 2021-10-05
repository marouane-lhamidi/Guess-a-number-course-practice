import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from "./Components/Header";
import StartGame from "./Screens/StartGame";
import GameScreen from "./Screens/GameScreen";
import GameOver from "./Screens/GameOver";
import * as Font from "expo-font"
import AppLoading from 'expo-app-loading';

const fetchFont = () => {
    return  Font.loadAsync({
        'open-sans' : require('./assets/Fonts/OpenSans-Regular.ttf'),
        'open-sans-bold' : require('./assets/Fonts/OpenSans-Bold.ttf')
    });
}

export default function App() {
    const [Number, setNumber] = useState();
    const [rounds, setRounds] = useState(0);
    const [dataLoading, setDataLoading] = useState(false);


    if (!dataLoading){
        return (
            <AppLoading
                startAsync={fetchFont}
                onFinish={() => setDataLoading(true)}
                onError={(err) => console.log(err)}
            />
        );
    }

    const updateRounds = round =>{
        setRounds(round);
    }

    const getNumber = (num) =>{
        setNumber(num);
        setRounds(0);
    }

    let content = <StartGame getting={getNumber}/>;

    if (Number && rounds <=0)
        content = <GameScreen ourVal={Number} update={updateRounds}/>;
    if (rounds > 0)
        content = <GameOver rounads={rounds} trueV={Number} restore={getNumber} />;

  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Guess a number"/>
        {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

