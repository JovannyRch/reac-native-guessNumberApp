import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = props => {
  return (
    <>
      <TextInput {...props} style={{...styles.input, ...props.styles}} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
