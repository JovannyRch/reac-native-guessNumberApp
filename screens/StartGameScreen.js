import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Inputs';
import Colors from '../constants/Colors';
import NumberContainer from '../components/NumberContainer'
const StartGameScreen = (params) => {
  const { } = params;
  const [number, setNumber] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const numberHandler = (value) => setNumber(value.replace(/[^0-9]/g), '');
  const resetHandler = () => {
    setNumber('');
    setConfirmed(false);
  };

  const confirmHandler = () => {
    const chosenNumber = parseInt(number);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Número inválido',
        'El número no está en el rango de 0 a 99',
        [{ text: 'Ok', style: 'destructive', onPress: resetHandler }],
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setNumber('');
    Keyboard.dismiss();
  };


  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={{ marginTop: 12.0 }}>
        <Text>Número eligido</Text>
        <NumberContainer texto={selectedNumber} />
        <Button title="Iniciar juego" />
      </Card>
    );
  }

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
          <Text style={styles.title}>Iniciar un nuevo juego </Text>
          <Card style={styles.inputContainer}>
            <Text>Selecciona un número</Text>
            <Input
              style={styles.input}
              blurOnSubmit
              autoCorrect={false}
              keyboardType="numeric"
              maxLength={2}
              onChangeText={(va) => numberHandler(va)}
              value={number}
            />
            <View style={styles.buttonContainer}>
              <Button
                title="Reiniciar"
                color={Colors.primary}
                onPress={resetHandler}
              />
              <Button
                color={Colors.secondary}
                title="Confirmar"
                onPress={confirmHandler}
              />
            </View>
          </Card>
          {confirmedOutput}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: 'center',
    height: 200.0,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
  },
  card: {
    marginTop: 20.0,
    alignItems: 'center'
  },
});

export default StartGameScreen;
