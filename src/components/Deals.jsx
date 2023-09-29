import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import RecommendProduct from '../assets/recommend.jpg'

const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.maintitle}>Recommended Deals for you</Text>
      <Image source={RecommendProduct} style={styles.imgrecommend}/>
      <View style={styles.buttonSection}>
      <View style={styles.row}>
      <TouchableOpacity style={styles.offButton}>
      <Text style={styles.dealtextBTN}>80% off</Text>
      </TouchableOpacity>
      <Text style={styles.deal}>Deal</Text>
      </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.rupees}>₹ 1,545.00</Text>
        <Text style={styles.mrp}>M.R.P</Text>
        <Text style={styles.discount}>₹ 500.00</Text>
      </View>
      <Text style={styles.productName}>Nykaa Facewash Gentle Skin Cleaner for all Skin type</Text>
      <View>
        <Text style={styles.details}>See all details</Text>
      </View>
    </View>
 
  )
}

export default Deals
const styles=StyleSheet.create({
    container:{
        marginTop:20,
        paddingHorizontal:10,
        
    },
    maintitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        paddingHorizontal:10,
    },
    imgrecommend:{
        height:250,
        width:'100%',
        marginVertical:10,
    },
    offButton:{
        padding:5,
        width:60,
        backgroundColor:'red',
        borderRadius:5,
        alignItems:'center',
     },
     row:{
      flexDirection:'row',
      alignItems:'center',
     
     },
     dealtextBTN:{
        color:'white',
        fontSize:13,

     },
     deal:{
        color:'red',
        marginLeft:6,
        fontSize:13,
        
     },
     rupees :{
       fontSize:16,
       fontWeight:'bold',
       color:'dark',
       marginVertical:10,
      },
     mrp:{
        fontSize:10,
        marginHorizontal:10,
       },
     discount:{
        fontSize:10,
        textDecorationLine:'line-through'
       },
       productName:{
        fontSize:16,
        color:'black',
        
       },
       details:{
       color:'#1409b3',
       fontSize:15, 
       marginVertical:10,
       }
       
    
})