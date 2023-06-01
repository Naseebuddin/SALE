import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Route from './src/Navigations/Routes';
import { CreateLoginEmail, Home, Mobile, Sell } from './src/Screens';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
// import store from './src/redux/store'
import AsyncStorage from '@react-native-async-storage/async-storage';
import StateSet from './src/redux/action/action';
import SplashScreen from 'react-native-splash-screen';
import action from './src/redux/action';
import color from './src/styels/color';
function App() {
  useEffect(() => {
    (async () => {
      try {
        const getingItem = await AsyncStorage.getItem('email');
        const passingItem = JSON.parse(getingItem);
        console.log(passingItem, 'item in the app.js');
        if (passingItem) {
          action.StateSet(passingItem);
        }
      } catch (e) { }
    })();
    setTimeout(() => {
      SplashScreen.hide;
    }, 1500);
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.realBlack }}>
      <StatusBar />
      <Provider store={store}>
        <Route />
      </Provider>
      {/* <Mobile/> */}
    </SafeAreaView>
  );
}
export default App;
