import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import brand1 from '../assets/brand1.jpeg'
import brand2 from '../assets/brand2.jpeg'
import brand3 from '../assets/brand3.jpeg'
import brand4 from '../assets/brand4.jpeg'

const Brand = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.maintitle}>Brands of the day</Text>

    <View style={styles.row}>
    <View style={styles.brands}>
    <Image source={brand1} style={styles.IMG}/>
    <Text style={styles.brandTitle}>Min 20% off|CarateLane Daimond Naklace</Text>
 </View>
 <View style={styles.brands}>
    <Image source={brand2} style={styles.IMG}/>
    <Text style={styles.brandTitle}>Min 40% off|Fossile ,title smart watch & More</Text>
 </View>
 

</View>
  <View style={styles.row}>
    <View style={styles.brands}>
    <Image source={brand3} style={styles.IMG}/>
    <Text style={styles.brandTitle}>Heels-Upto 50% on Healed Sandle ,high heels </Text>
 </View>
 <View style={styles.brands}>
    <Image source={brand4} style={styles.IMG}/>
    <Text style={styles.brandTitle}>sony 60w Blutooth SoundBar Speaker Audio Engine</Text>
 </View>
 

</View>
</View>
  )
}

export default Brand
const styles=StyleSheet.create({
    container:{
        marginTop:10,
      
        borderTopWidth:1,
        borderTopColor:'#c5c0c0'
        
    },
    maintitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        padding:10,
    },
    IMG:{
        height:150,
        width:'100%',
        borderRadius:5,
    },
    row:{
        flexDirection:'row',
    },
    brands:{
        width:'50%',
        padding:10,
    },
    brandTitle:{
        fontSize:14,
        color:'black',
        marginTop:5,

       
    },
})