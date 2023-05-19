import React from 'react';
import {  TextInput, View, StyleSheet } from 'react-native';
import {  } from 'react-native-size-matters';
import color from './../styels/color';
export default function TextInputWithLabel({
  place,
  textLength,
  KeyBoard,
  width,
  autoFocusInput,
  placeholderColor,
 onChangeTextInput  ,
  myValue ,
  multipleLine,
  textColor,
  secureTextEntry
}) {
  return (
    <View>
      <TextInput
      
        autoCapitalize='none'
        onChangeText={onChangeTextInput}
        placeholder={place}
        style={{ ...styles.textColor, width: width,color:textColor, fontWeight:'600' }}
        keyboardType={KeyBoard}
        maxLength={textLength}
        autoFocus={autoFocusInput}
        placeholderTextColor={placeholderColor}
        value={myValue}
        multiline={multipleLine}
        secureTextEntry={secureTextEntry}
        

  
      />
    </View>

  );
}

const styles = StyleSheet.create({
  textColor: {
    color: color.white,
    fontWeight: 'bold',
  },
});
