import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors'
const NumberContainer = (props) => {
  const { texto } = props;

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.number}>{texto}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2.0,
    borderColor: Colors.secondary,
    padding: 10,
    borderRadius: 10.0,
    marginVertical: 10.0,
    alignItems: 'center',
    justifyContent: 'center'
  }
  ,
  number: {
    color: Colors.primary,
    fontSize: 22.0
  }
});

export default NumberContainer;