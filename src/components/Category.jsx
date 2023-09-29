import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import cat1 from '../assets/fresh.jpeg'
import { Categories } from '../data/Categories'
import {useNavigation} from '@react-navigation/native'
const Category = () =>{
 const navigation=useNavigation();
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.container}>
    {Categories.map(item=>(
      
        <TouchableOpacity onPress={() => navigation.navigate('ProductScreen')} key={item.id} style={styles.category}>
    <Image source={item.image} style={styles.imgstyle}/>
      <Text style={styles.textstyle}>{item.title}</Text>
    </TouchableOpacity>
   ) )}
   
    </ScrollView>
  )
}
const styles=StyleSheet.create({
    container:{
       backgroundColor: 'white',
       padding:10,
      
    },
    imgstyle:{
        height:50,
        width:50,
    },
    textstyle:{
        fontSize:12,
        color:"#23233d"
    },
    category:{
        alignItems:'center',
        paddingHorizontal:8
 }


   
})

export default Category