import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const GameOverScreen = props => {
    return <>
        <View style={styles.screen}>
            <Text>Juego terminado</Text>
        </View>
    </>
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});

export default GameOverScreen;