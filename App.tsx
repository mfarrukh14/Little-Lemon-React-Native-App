import React from 'react';
import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader'
import LittleLemonFooter from './components/LittleLemonFooter'
import Welcome from './components/Welcome'
import MenuItems from './components/MenuItems'
import FeedbackForm from './components/FeedbackForm'
import LoginScreen from './components/LoginScreen'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
 <View style={styles.conatiner}>
    <LittleLemonHeader />
    <Welcome />
    <LittleLemonFooter />
    </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  conatiner: 
  {
    flex: 1,
    backgroundColor:'dimgray'
  },
});

export default App;
