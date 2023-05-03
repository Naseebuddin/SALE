import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack/AuthStack';
import MainStack from './MainStack/MainStack';
import { useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();
function Route() {
const stateChangingVal = useSelector ((state) => state.AppStatus.status);
const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
              {stateChangingVal ? MainStack(Stack) : AuthStack(Stack) }
              {/* {AuthStack(Stack)} */}
            </Stack.Navigator >
        </NavigationContainer>
    );
}

export default Route;