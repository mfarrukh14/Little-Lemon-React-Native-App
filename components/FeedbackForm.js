import React from 'react';
import { Text, KeyboardAvoidingView, StyleSheet, TextInput, ScrollView,Platform } from 'react-native';

const FeedbackForm = () => {
  const [firstName,onChangeFirstName] = React.useState('');
  const [lastName,onChangeLastName] = React.useState('');
  const [message,onChangeMessage] = React.useState('');
  return (
   <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView keyboardDismissMode="on-drag">
      <Text style={styles.headingSection}>
        How was your visit to little lemon ?
      </Text>
      <Text style={styles.InfoSection}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
      <TextInput
        value={firstName}
        onChangeText={onChangeFirstName}
        style={styles.Input}
        placeholder = 'First Name'
        />
       <TextInput
        value={lastName}
        onChangeText={onChangeLastName}
        style={styles.Input}
        placeholder = 'Last Name'
        />
         <TextInput
        value={message}
        onChangeText={onChangeMessage}
        style={styles.messageInput}
        placeholder = 'Please leave feedback'
        multiline = {true}
        maxLength = {200}
        />
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495ES7',
  },
  Input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#F4CE14',
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlignVertical:"top",
    fontSize: 16,
    backgroundColor: '#F4CE14',
  },
  InfoSection: {
    fontSize: 20,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  headingSection: {
    fontSize: 28,
    padding: 30,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
});

export default FeedbackForm;
