/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.screen}>
        <Header title={'Guess a Number'} />
        <StartGameScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
  },
});

export default App;
