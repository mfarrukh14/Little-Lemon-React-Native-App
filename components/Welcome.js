import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

const WelcomeData = [

];

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../img/littlelemon.jpg')} style={styles.Image} />
      <ScrollView hroizontal={false} indicatorStyle={'white'} style={styles.scroll}>
        <Text style={styles.text1}>Welcome to Little Lemon</Text>
        <Text style={styles.text2}>Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would love
          to hear your experience with us!</Text>
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
    backgroundColor: 'dimgray'
  },
  text1: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10
  },
  text2: {
    color: 'white',
    fontSize: 20

  },
  Image: {
    height: 100,
    width: 100,
    marginTop: 10,
    borderRadius: 30
  }

})

export default Welcome