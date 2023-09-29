import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Subheader from '../components/Subheader'
import Category from '../components/Category'
import Carousel from '../components/carousel'
import Service from '../components/service'
import Deals from '../components/Deals'
import Brand from '../components/Brand'



const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
  <Header/>
   <Subheader/>
   <Category/> 
    <Carousel/>
    <Service/>
    <Deals/>
    <Brand/>
    </ScrollView>
  )
}

export default HomeScreen