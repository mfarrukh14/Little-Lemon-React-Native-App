import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image,ImageBackground,useColorScheme, useWindowDimensions} from 'react-native';



const Welcome = () => {
  const Colorscheme = useColorScheme();
  const {width,height,fontScale} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Image source={require('../img/logo.png')} style={styles.Image} />
      <ScrollView hroizontal={false} indicatorStyle={'white'} style={[styles.scroll,Colorscheme === 'light' ? {backgroundColor:'white'} : {backgroundColor:'dimgray'}]}>
        <Text style={styles.text2}>Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would love
          to hear your experience with us!</Text>
          <Text style={styles.text2}>Color Scheme: {Colorscheme}</Text>
          <Text style={styles.text2}>My apps dimensions: </Text>
          <Text style={styles.text2}>Height: {height}</Text>
          <Text style={styles.text2}>Width: {width}</Text>
          <Text style={styles.text2}>Font Scale: {fontScale}</Text>
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
    color: 'white',
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