import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';

const backgroundImage = require('../assets/signin-bg2.png');

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);

  const handleSignIn = () => {
    if (username === "70362019039" && password === "Pass$2019@")
    navigation.navigate('Welcome');
    else
    Alert.alert("Invalid Credentials");
  };

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'poppins-semibold': require('../assets/fonts/Poppins-SemiBold.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Sign In</Text>
          <TextInput
            style={styles.input}
            placeholder="User ID"
            onChangeText={text => setUsername(text)}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
  },
  container: {
    padding: 40,
  },
  title: {
    color: '#36454F',
    fontFamily: 'poppins-medium',
    fontSize: 30,
    marginBottom: 20
  },
  input: {
    fontFamily: 'poppins-medium',
    color: '#36454F',
    height: 40,
    borderBottomWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: '#1200DD',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#F3F3F3',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default SignInPage;