import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomNumberBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor((Math.random() * (max - min)) + min)
    if (rndNum === exclude) {
        return generateRandomNumberBetween(min, max, exclude);
    } else
        return rndNum;
}



const GameScreen = props => {
    const { userChoise, onGameOver } = props;
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumberBetween(1, 100, userChoise));
    const currentLow = useRef(1);
    const currentHight = useRef(100);
    const [rounds, setRounds] = useState(0);
    useEffect(() => {
        if (currentGuess == userChoise) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoise, onGameOver]);


    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < userChoise) || (direction === 'greater' && currentGuess > userChoise)) {
            Alert.alert('No mientas', 'Tu sabes que está mal', [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            currentHight.current = currentGuess;
        }
        else {
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomNumberBetween(currentLow.current, currentHight.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    };
    return <>
        <View style={style.screen}>
            <Text>Opponente del Invitado</Text>
            <NumberContainer texto={currentGuess}></NumberContainer>
            <Card style={style.buttonContainer}>
                <Button title="MENOS" onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title="MAS" onPress={nextGuessHandler.bind(this, 'greater')} />
            </Card>
        </View>

    </>
};

const style = StyleSheet.create({
    screen: {
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20.0,
        width: 300.0,
        maxHeight: '80%'

    }
});
export default GameScreen;

