import React from "react";
import navigationString from "../../constant/navigationString";
import { Bikes, Buycar, Home, Jobs, Mobile, Olxautos, Properties, Seeall } from "../../Screens";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = () =>{

    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={navigationString.HOMESTACK} component={Home}/>
        <Stack.Screen name={navigationString.BUYCAR} component={Buycar}/>
        <Stack.Screen name={navigationString.JOBS} component={Jobs}/>
        <Stack.Screen name={navigationString.MOBILE} component={Mobile}/>
        <Stack.Screen name={navigationString.OLXAUTOS} component={Olxautos}/>
        <Stack.Screen name={navigationString.PROPERTIES} component={Properties}/>
        <Stack.Screen name={navigationString.BIKES} component={Bikes}/> 
        <Stack.Screen name={navigationString.SEEALL} component={Seeall}/>
        </Stack.Navigator>
    )

}

export default HomeStack;
