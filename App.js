import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import HomeScreen from './src/screen/HomeScreen'
import Router from './src/navigation/Router'


const App = () => {
  return (
    <>
    <StatusBar backgroundColor="#9ee4d4" barStyle="dark-content"/>
    <Router/>
    </>
  )
}

export default App