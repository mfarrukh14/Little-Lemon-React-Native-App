import React from 'react';
import {useAppState,useDeviceOrientation} from '@react-native-community/hooks'
import { Text, View, StyleSheet, ScrollView, Image,Pressable,useColorScheme, useWindowDimensions} from 'react-native';



const Welcome = ({navigation}) => {
  const Colorscheme = useColorScheme();
  const {width,height,fontScale} = useWindowDimensions();
  const myappState = useAppState();
  const Orientation = useDeviceOrientation();
  return (
    <View style={styles.container}>
      <Image source={require('../img/logo.png')} style={styles.Image} />
      <ScrollView hroizontal={false} indicatorStyle={'white'} style={[styles.scroll,Colorscheme === 'light' ? {backgroundColor:'white'} : {backgroundColor:'dimgray'}]}>
        <Text style={[styles.text2,Colorscheme === 'light' ? {color:'black'} : {color:'white'}]}>Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would love
          to hear your experience with us!</Text>
          <Pressable onPress = {()=>navigation.navigate('MenuItems')}><Text style = {styles.text2}>View Menu</Text></Pressable>
          <Text style={[styles.text2,Colorscheme === 'light' ? {color:'black'} : {color:'white'}]}>Color Scheme: {Colorscheme}</Text>
          <Text style={[styles.text2,Colorscheme === 'light' ? {color:'black'} : {color:'white'}]}>My apps dimensions: </Text>
          <Text style={[styles.text2,Colorscheme === 'light' ? {color:'black'} : {color:'white'}]}>Height: {height}</Text>
          <Text style={[styles.text2,Colorscheme === 'light' ? {color:'black'} : {color:'white'}]}>Width: {width}</Text>
          <Text style={[styles.text2,Colorscheme === 'light' ? {color:'black'} : {color:'white'}]}>Orientation: {Orientation}</Text>
          <Text style={[styles.text2,Colorscheme === 'light' ? {color:'black'} : {color:'white'}]}>Font Scale: {fontScale}</Text>
          <Text style={[styles.text2,Colorscheme === 'light' ? {color:'black'} : {color:'white'}]}>State: {myappState}</Text>
      </ScrollView>
    </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
    gap: 30,
  },
  scroll: {
    flex: 1,
    padding: 25,
  },
  text1: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10
  },
  text2: {
    fontSize: 20,
    textAlign:'center'
  },
  Image: {
    height: 100,
    width: 100,
    marginTop: 10,
    borderRadius: 0,
    alignSelf:'center'
  }

})

export default Welcome