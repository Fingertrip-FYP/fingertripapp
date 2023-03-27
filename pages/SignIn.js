import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

function SignInScreen() {
  return (
    <ImageBackground source={require('../assets/signin-bg2.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput style={styles.input} placeholder="User ID" value={userID} onChangeText={setUserID} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword} />
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    width: '80%',
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  button: {
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
  },
});

export default SignInScreen;