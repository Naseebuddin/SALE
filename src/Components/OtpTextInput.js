import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import color from './../styels/color';
export default function OtpTextInput({
inputvalue,
inputOnChangeText,
}) {
  return (
    <View style={styles.viewStyle}>
      <TextInput
        style={styles.inputStyle}
        autoFocus={true}
        // maxLength={}
        
        placeholder="-"
        placeholderTextColor={color.white}
        keyboardType={'number-pad'}
        value={inputvalue}
        onChangeText={inputOnChangeText}
        
      />
      {/* <TextInput
        style={styles.inputStyle}
        maxLength={1}
        placeholder="-"
        placeholderTextColor={color.white}
        keyboardType={'number-pad'}
      />
      <TextInput
        style={styles.inputStyle}
        maxLength={1}
        placeholder="-"
        placeholderTextColor={color.white}
        keyboardType={'number-pad'}
      />
      <TextInput
        style={styles.inputStyle}
        maxLength={1}
        placeholder="-"
        placeholderTextColor={color.white}
        keyboardType={'number-pad'}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateScale(60),
  },
  inputStyle: {
    height: verticalScale(48),
    width: scale(120),
    borderWidth:1,
    flexDirection:'row',
    justifyContent:'space-between',
    borderColor: color.darkgreen,
    marginLeft: 10,
    paddingLeft: moderateScale(20),
    color: Colors.white,
    fontSize: 16,
  },
});
