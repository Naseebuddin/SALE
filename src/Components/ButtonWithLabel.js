import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import color from './../styels/color';
function ButtonWithLabel({
  text,
  image,
  height,
  width,
  btnColor,
  txtColor,
  fontWeight,
  marginHorizontal,
  marginLeftCus,
  onpressButton,
  borderWidth,
  customFlex,
}) {
  return (
    <View>
      <TouchableOpacity
        onPress={onpressButton}
        style={{
          ...styles.btnStyle,
          height: height,
          flex:customFlex,
          width: width,
          backgroundColor: btnColor,
          marginHorizontal: marginHorizontal,borderWidth:borderWidth
        }}>
        <Image
          resizeMode="stretch"
          style={{...styles.imageStyle, marginRight: marginLeftCus}}
          source={image}
        />
        <Text
          style={{
            
            ...styles.textStyle,
            color: txtColor,
            fontWeight: fontWeight,
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default ButtonWithLabel;
const styles = StyleSheet.create({
  imageStyle: {
    height: verticalScale(22),
    width: scale(20),
  },
  btnStyle: {
    flexDirection: 'row',
    borderColor: color.white,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(5),
    marginBottom: moderateScale(10),
  },
  textStyle: {
    fontSize: 16,
    color: color.white,
    marginLeft: moderateScale(12),
    color: color.black,
  },
});
