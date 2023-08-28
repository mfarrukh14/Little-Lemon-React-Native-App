import React, { useState } from 'react';
import { View, Text, SectionList, StyleSheet, Pressable } from 'react-native';

const Items = [
  {
    title: 'Appetizers',
    data: [
      'Hummus',
      'Moutabal',
      'Falafel',
      'Marinated Olives',
      'Kofta',
      'Eggplant Salad',
    ],
  },
  {
    title: 'Main Dishes',
    data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
  },
  {
    title: 'Sides',
    data: [
      'Fries',
      'Buttered Rice',
      'Bread Sticks',
      'Pita Pocket',
      'Lentil Soup',
      'Greek Salad',
      'Rice Pilaf',
    ],
  },
  {
    title: 'Desserts',
    data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
  },
];

const Item = ({ name }) => {
  return (
    <View style={styles.Scroll}>
      <Text style={styles.text2}>{name}</Text>
    </View>
  );
};

const Footer = () => (
  <Text style={styles.text2}>
    All Right Reserved By Little Lemon, 2022
  </Text>
);
const Separator = () => <View style={styles.separator} />;
const Header = () => <Text style={styles.text1}>View Menu</Text>;
const MenuItems = ({navigation}) => {
  const [showMenu, setShowMenu] = useState(false);
  const renderItem = ({ item }) => <Item name={item} />;
  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.text1}>{title}</Text>
  );
  return (
    <View style={styles.container}>
      {!showMenu && (
        <>
          <Text style={styles.text1}>Welcome to Little Lemon</Text>
          <Text style={styles.sptext2}>
            Little Lemon is a charming neighborhood bistro that serves simple food
            and classic cocktails in a lively but casual environment. We would love
            to hear your experience with us!
          </Text>
        </>
      )}
      <Pressable
        style={styles.button}
        onPress={() => {
          setShowMenu(!showMenu);
        }}
      >
        <Text>{showMenu ? 'Home' : 'View Menu'}</Text>
      </Pressable>
      {showMenu && (
        <SectionList
          sections={Items}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      <Pressable style = {styles.button} onPress = {()=> navigation.goBack()}><Text >Go Back</Text></Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkred',
  },
  Scroll: {
    padding: 40,
    backgroundColor: 'black',
  },
  text1: {
    fontSize: 40,
    flexWrap: 'wrap',
    color: 'white',
    textAlign: 'center',
  },
  text2: {
    fontSize: 20,
    color: 'yellow',
  },
  list: {
    flex: 1,
    gap: 1,
  },
  button: {
    height: 70,
    width: 200,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#EDEFEE',
  },
  sptext2: {
    fontSize: 20,
    color: 'yellow',
    padding: 20,
  },
});

export default MenuItems;
