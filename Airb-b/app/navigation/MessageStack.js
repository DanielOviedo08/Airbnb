import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Message from "../screens/Message";
const Stack = createStackNavigator();

export default function FavoritesStack(){

    return(
        <Stack.Navigator
        screenOptions={{
            headrMode: 'screen',
            headerTintColor: 'white',
            headerStyle:{backgroundColor: '#ff5a60'}
        }}
        >
            <Stack.Screen name="messageStack"
            component={Message}
            options={{ title: "Mensaje" }}
            />
        </Stack.Navigator>
    )
}
