import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Profile"
import UserLogged from "../screens/profile/UserLogged";
import UserGuest from "../screens/profile/UserGuest";
import UserLogin from "../screens/profile/UserLogin";

const Stack = createStackNavigator()

export default function ProfileStack() {
    return (
        <Stack.Navigator
        //initialRouteName="userLogin"
            screenOptions={{
                headrMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#ff5a60' }
            }}
        >


            <Stack.Screen name="profileStack" component={Profile} options={{ title: "Perfil" }} />
            <Stack.Screen name="userGuest" component={UserGuest} options={{ title: "Perfil de invitado" }} />
            <Stack.Screen name="userLogged" component={UserLogged} options={{ title: "Perfil de Usuario" }} />
            <Stack.Screen name="userLogin" component={UserLogin} options={{ title: "Inicio Sesion" }} />
        </Stack.Navigator>

    )
}