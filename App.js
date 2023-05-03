import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Route from './src/Navigations/Routes';
import { CreateLoginEmail } from './src/Screens';
import { Provider } from 'react-redux';
import store from './src/Screens/redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StateSet from './src/Screens/redux/action/action';
function App() {
    useEffect(() => {
        (async () => {
            try {
                const getingItem = await AsyncStorage.getItem('userLogin');
                const passingItem = JSON.parse(getingItem);
                if (passingItem) {
                    StateSet(true);
                }
            } catch (e) {
            }
        })();
    }, []);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <Provider store={store}>
                <Route />
            </Provider>
        </SafeAreaView>
    );
}
export default App;
