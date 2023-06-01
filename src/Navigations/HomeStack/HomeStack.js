import React from 'react';
import navigationString from '../../constant/navigationString';
import 'react-native-gesture-handler';
import { Bikes, Buycar, Home, Jobs, Mobile, Olxautos, Properties, Seeall, } from '../../Screens';
import {
  createStackNavigator,
  TransitionPresets,
  FadeInFromBottomAndroidSpec,
  TransitionSpecs,
} from '@react-navigation/stack';
const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        detachInactiveScreens: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        ...TransitionPresets.ModalFadeTransition,
      }}
      animation="fade">
      <Stack.Screen name={navigationString.HOMESTACK} component={Home} />
      <Stack.Screen name={navigationString.BUYCAR} component={Buycar} />
      <Stack.Screen
        name={navigationString.JOBS}
        options={{ cardShadowEnabled: false }}
        component={Jobs}
      />
      <Stack.Screen name={navigationString.MOBILE} component={Mobile} />
      <Stack.Screen name={navigationString.OLXAUTOS} component={Olxautos} />
      <Stack.Screen name={navigationString.PROPERTIES} component={Properties} />
      <Stack.Screen name={navigationString.BIKES} component={Bikes} />
      <Stack.Screen name={navigationString.SEEALL} component={Seeall} />
    </Stack.Navigator>
  );
};
export default HomeStack;
