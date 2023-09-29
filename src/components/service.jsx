import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import AmazonPay from '../assets/amazon-pay.png'
import MoneyPay from '../assets/send-money.jpg'
import ScanQR from '../assets/scan-qr.jpeg'
import PayBills from '../assets/pay-bills.jpeg'
import service1 from '../assets/service1.jpeg'
import { ServiceData } from '../data/servicedata'

const Service = () => {
  return (
  
   <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container} 
   contentContainerStyle={{padding:0}}>

   <View style={styles.serviceContainer}>
    <View style={styles.payRow}>
      <View style={styles.innerimg}>
        <Image source={AmazonPay} style={styles.imgStyle}/>
        <Text style={styles.title}>AmazonPay</Text>
      </View>
      <View style={styles.innerimg}>
        <Image source={MoneyPay} style={styles.imgStyle}/>
        <Text style={styles.title}>Send-Money</Text>
      </View>
    </View>
    <View style={styles.payRow}>
      <View style={styles.innerimg}>
        <Image source={ScanQR} style={styles.imgStyle}/>
        <Text style={styles.title}>Scan-QR</Text>
      </View>
      <View style={styles.innerimg}>
        <Image source={PayBills} style={styles.imgStyle}/>
        <Text style={styles.title}>Pay-bills</Text>
      </View>
    </View>
   </View>
   {ServiceData.map(item=>(
    <View style={styles.contaierservice} key={item.id}>
    <Text style={styles.textservice}>{item.title}</Text>
    <Image source={item.image} style={styles.imgeservice}/>
   </View>
   ))}
   
    
   </ScrollView>
   
  )
}

export default Service
const styles=StyleSheet.create({
    container:{
        marginTop:-20,
        paddingHorizontal:10,
        
    },
    serviceContainer:{
        backgroundColor:'#f7f5f5',
        borderRadius:5,
        elevation:15,
       
       
        
    },
    payRow:{
     flexDirection: 'row',
     alignItems:'center',
   
    justifyContent:'center',
   
    },
    innerimg:{
        padding:10,
        alignItems:'center',
        paddingTop:15,
        justifyContent:'space-between',
},
    imgStyle:{
      height:50,
      width:50,
      borderRadius:25
    },
    title:{
        fontSize:12,
        color:'black',
        marginTop:5,
    },
    contaierservice:{
        backgroundColor:'white',
        marginLeft:10,
        padding:5,
        borderRadius:5,
        elevation:15,
        width:140,

    },
    imgeservice:
    {
        width:'100%',
        height:130,
    },
    textservice:{
     fontSize:15,
     color:'black',
     marginBottom:7
    }

})