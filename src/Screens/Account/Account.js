import React from 'react';
import {Text, View} from 'react-native';
import navigationString from '../../constant/navigationString';
export default function Acount({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate(navigationString.SETTING)}>
        Account
      </Text>
    </View>
  );
}
