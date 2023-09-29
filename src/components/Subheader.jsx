import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/dist/Feather';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';


const Subheader = () => {
  return (
    <LinearGradient start={{x: 0, y: 0}} 
    end={{x: 1, y: 0}} colors={['#c7f2f6', '#99e1d6', '#c0f6ea']} 
    style={styles.container}>
    <Feather name="map-pin" size={15} color='black'/>
    <Text  style={styles.text}>Delever to Santosh-Chennai-586112</Text>
    <SimpleLineIcons name="arrow-down" size={15} color='black'/>
    </LinearGradient>
  )
}
const styles=StyleSheet.create({
    container:{
 padding:10,
 flexDirection:'row',
 alignItems:'center',
 paddingHorizontal:20,
    },
text:{
fontSize:16,
paddingHorizontal:8,
color:"black",
    }

})


export default Subheader