import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader'
import LittleLemonFooter from './components/LittleLemonFooter'
import Welcome from './components/Welcome'
import MenuItems from './components/MenuItems'
import FeedbackForm from './components/FeedbackForm'
import LoginScreen from './components/LoginScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function LogoTitle(){
  return(
    <Image source={require('./img/logo.png')}
    style = {{
      height:40,
      width:300,
      resizeMode:'contain',
      alignSelf:'center'
    }
    }
    />
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="login" screenOptions={{ headerStyle: { backgroundColor: '#333333' },headerTintColor:'#fff',headerTitleStyle:{fontWeight:'bold'},headerTitleAlign:'center'}}>
      <Tab.Screen options={{title: 'Home',headerTitle: (props)=> <LogoTitle {...props} /> }} name="Welcome" component={Welcome} />
        <Tab.Screen name="MenuItems" component={MenuItems} />
        <Tab.Screen name="login" component={LoginScreen} />
      </Tab.Navigator>
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
