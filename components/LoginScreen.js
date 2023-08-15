import React, {useState} from 'react';
import { ScrollView, Text, StyleSheet,TextInput,Alert,Pressable} from 'react-native';

export default function LoginScreen() 
{
   const [Email,onChangeEmail] = React.useState('');
   const [pass,onChangePass] = React.useState('');
   const [login,ShowLogin] = useState(false)
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
  

      {!login && (
        <>
        <Text style={styles.regularText}>Login to continue </Text>
         <TextInput
         value={Email}
         onChangeText={onChangeEmail}
         style={styles.Input}
         placeholder = 'Email'
          keyboardType={'email-address'}
         //  onFocus = {()=>Alert.alert("Email in focus")}
         //  onBlur = {() => Alert.alert("Email out of focus")}
         />
          <TextInput
          secureTextEntry={true}
         value={pass}
         onChangeText={onChangePass}
         style={styles.Input2}
         placeholder = 'Password'
         />
 
         <Pressable style = {styles.LogInButton} onPress={() => {ShowLogin(true)}}><Text style = {styles.LogInText}>Log In</Text></Pressable>
        </>
      )}

      {login && (
        <Text style = {styles.SuccessMessage}>You have Successfully logged in !</Text>
      )}
       
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
    Input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: 'white',
    borderRadius:5
  },
     Input2: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: 'white',
    borderRadius:5
  },
  LogInButton: {
    height: 70,
    width: 200,
    backgroundColor: '#EE9972',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  LogInText:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  SuccessMessage:{
    color: 'white',
    padding: 10,
    fontSize: 20,
    textAlign:'center'
  }
});

