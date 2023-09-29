import { View, Text, StyleSheet, Image,ScrollView } from 'react-native'
import React from 'react'
import product1 from '../assets/prod1.png'
import primelogo from '../assets/prime-logo.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { GetRating } from '../utils/helper';
import { ProductData } from '../data/productdata';

const Product = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Results</Text>
      <Text style={styles.tagline}>Price and other details may vary based on product and color</Text>

      {ProductData.map(item=>(
        <View  key={item.id} style={styles.productSection}>

<View style={styles.productImgeSection}>
  <Image source={item.image} style={styles.product1imge}/>
</View>
<View style={styles.productDetailSection}>
  <Text style={styles.sponserd}>Sponsered</Text>
  <Text style={styles.productname}>{item.productName}</Text>
  <View style={styles.ratingrow}>
  <Text style={styles.rating}>{item.rating}</Text>
   <Text style={styles.ratingwidth}> {GetRating(item.rating)}</Text>
    <Text style={styles.ratingget}>{item.ratingCount}</Text>
  <SimpleLineIcons name='arrow-down' size={10} color='black'/>
  </View>
 <View style={styles.ratingrow}>
 <Text style={styles.price}>{item.price}</Text>
 <Text style={styles.mrp}>M.R.P</Text>
 <Text style={styles.discount}>{item.crossOutText}</Text>
 </View>
 <View>
 <Text style={styles.offer}>up to 5% Cashback amazon pay credit card</Text>
 <Image source={primelogo} style={styles.primelogo}/>
 <Text style={styles.delevery}>{item.deliveryBy}</Text>
 </View>
  
</View>

</View>
      ))}

     
     
      
     
    </ScrollView>
    
  )
}

export default Product
const styles=StyleSheet.create({
container:{
    padding:10,
},
title:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
},
tagline:{
    fontSize:12,
    color:'grey'
},
productSection:{
    borderWidth:1,
    borderColor:'#dfdcdc',
    flexDirection:'row',
    marginVertical:15,
},
productImgeSection:{
    width:'40%',
    backgroundColor:'#e3e1e1',
    justifyContent:'center',
},
productDetailSection:{
    width:'60%',
    padding:10,
},
product1imge:{
    height: 180,
    width:'100%',
    resizeMode:'contain'
},
ratingrow:{
    flexDirection:'row',
    alignItems:'center'
},
sponserd:{
    fontSize:12,
    color:'#003c80',
    marginBottom:5,
},
productname:{
    fontSize:10,
    color:'black',
    lineHeight: 18,

},
rating:{
  fontSize:10,
  color:'blue',
  
},
ratingwidth:{
  marginHorizontal:4,
},
ratingget:{
fontSize:10,
color:'blue',
},
price:{
  fontSize:12,
  color:'black',
  fontWeight:'bold',

},
mrp:{
  fontSize:10,
  marginHorizontal:5,
},
discount:{
  fontSize:10,
textDecorationLine:'line-through',
color:'black'
},
offer:{
  fontSize:10,
  marginVertical:5,
},
primelogo:{
  height:15,
  width:45,
},
delevery:{
  fontSize:10,
}


})