import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';



const Header = () => {
  return (
  <View>
   <LinearGradient start={{x: 0, y: 0}} 
   end={{x: 1, y: 0}} colors={['#88dae0', '#99e1d6', '#9ee4d4']} 
   style={styles.container}>
   <View  style={styles.inputBox}>
   <View style={styles.input}>
   <Ionicons name='search' size={23} color="black"/>
   <TextInput placeholder='Search Amazon.in' placeholderTextColor='#848484'/>
   </View>
   <AntDesign  name='scan1' size={22} color="#1f1f1f"/> 
  
</View>
 <Feather  name='mic' size={20} color='black' /> 

 </LinearGradient>
</View>
     
   
  )
}
const styles=StyleSheet.create({
container:{
 padding:10,
 flexDirection:'row',
 alignItems: 'center',
 justifyContent: 'space-between',
},
inputBox:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    backgroundColor: 'white',
    borderColor:'#a1bcc0',
    borderRadius:10,
    width:'90%',
    justifyContent:'space-between',
    paddingHorizontal:10,
    elevation:5,
    },
    input:{
      flexDirection:'row',
      justifyContent: 'center',
      alignItems:'center',
    
    }

})

export default Header