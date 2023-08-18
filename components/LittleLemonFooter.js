import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const LittleLemonFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>All rights reserved by Little Lemon, 2022</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flex: 0.06,
    backgroundColor: '#EE9972',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10
  },
  text: {
    fontSize: 15,
    color:'black'
  },
});

export default LittleLemonFooter;
