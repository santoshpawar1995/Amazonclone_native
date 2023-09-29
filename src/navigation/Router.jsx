import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import Product from '../components/Product';
const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen  options={{headerShown: false}} name="HomeScreen" component={HomeScreen} />
      <Stack.Screen   name="ProductScreen" component={Product} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Router