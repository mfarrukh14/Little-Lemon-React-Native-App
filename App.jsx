import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import Welcome from './components/Welcome';
import MenuItems from './components/MenuItems';
import Ionicons from 'react-native-vector-icons/Ionicons'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Image
      source={require('./img/logo.png')}
      style={{
        height: 40,
        width: 300,
        resizeMode: 'contain',
        alignSelf: 'center',
      }}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Welcome') {
              iconName = focused
                ? 'information-circle-sharp'
                : 'information-circle-sharp';
            } else if (route.name === 'Menu') {
              // Corrected icon name
              iconName = 'menu';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Welcome" component={Welcome} />
        <Tab.Screen name="Menu" component={MenuItems} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dimgray',
  },
});
