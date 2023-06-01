import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import color from "../styels/color";
const TextInputForSellingItem = ({
    placeholder,
    onFoucs,
    value,
    onChangeText,
    width,
    height,
    borderColor,
    paddingBottom,
    multiline,
    maxLength,
    keyboardType
}) => {
    return (
        <View style={{ ...styles.viewStyle, }}>
            <TextInput style={{
                ...styles.inputStyle, paddingBottom: paddingBottom,
                width: width, height: height, color: color.white, borderColor: borderColor
            }} placeholder={placeholder}
                value={value}
                keyboardType={keyboardType}
                maxLength={maxLength}
                multiline={multiline}
                placeholderTextColor={color.darkBlack}
                onChangeText={onChangeText}
                onFocus={onFoucs} />
        </View>
    )
}
export default TextInputForSellingItem;
export const styles = StyleSheet.create({
    viewStyle: {
        borderRadius: moderateScale(8)
    },
    inputStyle: {
        paddingVertical: moderateScale(16),
        borderRadius: moderateScale(8),
        marginLeft: moderateScale(10),
        textAlignVertical: 'top',
        fontSize:moderateScale(16)
    },

})
//lefting state up 