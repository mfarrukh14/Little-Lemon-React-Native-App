import React from 'react';
import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader'
import LittleLemonFooter from './components/LittleLemonFooter'
import Welcome from './components/Welcome'
import MenuItems from './components/MenuItems'
import FeedbackForm from './components/FeedbackForm'
import LoginScreen from './components/LoginScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerStyle: { backgroundColor: '#FBDABB' }}}>
        <Stack.Screen name="Menu" component={MenuItems} />
        <Stack.Screen options={{title: 'Home'}} name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  conatiner:
  {
    flex: 1,
    backgroundColor: 'dimgray'
  },
});

export default App;
