import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

const StartGameScreen = params => {
  const {} = params;
  return (
    <>
      <View style={styles.screen}>
        <Text style={styles.title}>Iniciar un nuevo juego</Text>
        <View style={styles.inputContainer}>
          <Text>Selecciona un número</Text>
          <TextInput style={styles.input} placeholder={'Soy un input'} />

          <View style={styles.buttonContainer}>
            <Button color="red" title="Reiniciar" onPress={() => {}} />
            <Button title="Confirmar" onPress={() => {}} />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    width: '80%',
    marginTop: 10,
  },
});

export default StartGameScreen;
