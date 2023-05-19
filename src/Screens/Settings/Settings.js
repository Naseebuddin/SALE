import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Text, View } from "react-native";
import StateSet from "../../redux/action/action";

const Setting = () =>{
    const removeItem = ( ) =>{
        AsyncStorage.removeItem('email').then((res)=>{
            StateSet(false)
        })
    }
    return(
        <View>
            <Text onPress={()=>removeItem()}>LogOut</Text>
        </View>
    )
}
export default Setting;