import React from 'react';
import {Text,View,StyleSheet} from 'react-native'

const LittleLemonHeader = () =>{
  return(
      <View style = {styles.container}>
      <Text style = {styles.text}>Little Lemon</Text>
      </View>
)}

const styles = StyleSheet.create({
  container:{
    flex: 0.15,
    backgroundColor:'#EE9972',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize: 35,
    color:'black'
  }
})

export default LittleLemonHeader