import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack/AuthStack';
import MainStack from './MainStack/MainStack';
import { useSelector } from 'react-redux';
import HomeStack from './HomeStack/HomeStack';
const Stack = createNativeStackNavigator();
function Route() {
    const data = useSelector((state)=>state?.stateChanging?.state)
console.log(data,'data in the routes>>>>>')
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {data ? MainStack(Stack) :AuthStack(Stack)}
                {/* {AuthStack(Stack)} */}
            </Stack.Navigator >
        </NavigationContainer>
    );
}
export default Route;