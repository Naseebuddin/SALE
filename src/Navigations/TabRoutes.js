import React from 'react';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import navigationString from './../constant/navigationString';
import { Image, Text } from 'react-native';
import imagePath from '../constant/imagePath';
import color from './../styels/color';
import { Acount, Chat, Myads, Sell } from '../Screens';
import HomeStack from './HomeStack/HomeStack';
import { TransitionPresets } from '@react-navigation/stack';

function TabRoutes() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, }}>
      <Tab.Screen
        name={navigationString.HOME}
        component={HomeStack}
        screenOption={{
          headerShow: false,

        }}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={imagePath.home}
                style={{
                  tintColor: focused ? color.white : color.darkBlack,
                }}
              />
            );
          },
          tabBarStyle: {
            backgroundColor: color.black,
          },
        }}

      />
      <Tab.Screen
        name={navigationString.CHAT}
        component={Chat}
        screenOption={{ headerShown: false }}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={imagePath.chat}
                style={{
                  tintColor: focused ? color.white : color.darkBlack,
                  height: 26,
                  width: 26,
                }}
              />
            );
          },
          tabBarStyle: {
            backgroundColor: color.black,
          },
        }}
      />
      <Tab.Screen
        name={navigationString.SELL}
        component={Sell}
        screenOption={{
          headerShow: false,
        }}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={imagePath.stories}
                style={{ width: 52, height: 52, marginBottom: 32 }}
              />);
          },
          tabBarStyle: {
            backgroundColor: color.black, display: 'none',
          },
        }}
      />
      <Tab.Screen
        name={navigationString.MYADS}
        component={Myads}
        screenOption={{ headerShown: false }}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={imagePath.inactive}
                style={{ tintColor: focused ? color.white : color.darkBlack }}
              />
            );
          },
          tabBarStyle: {
            backgroundColor: color.black,
          },
        }}
      />
      <Tab.Screen
        name={navigationString.ACCOUNT}
        component={Acount}
        screenOption={{ headerShown: false }}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={imagePath.user}
                style={{ tintColor: focused ? color.white : color.darkBlack }}
              />
            );
          },
          tabBarStyle: {
            backgroundColor: color.black,
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default TabRoutes;
