import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native"
import Login from "../Screen/Login"
import Sign from '../Screen/Sign';
import Home from '../Screen/Home';



const Stack = createStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
         <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
     <Stack.Screen name='Sign' component={Sign}/>
     <Stack.Screen name='Login' component={Login}/>
     <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Index