import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import app from '../config/config';

const backgroundImage = require('../assets/signin-bg2.png');
const auth = getAuth(app);
const db = getFirestore();

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);

  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  })
 console.log("DATA ===", value)
  async function signIn() {
    if (value.email === '' || value.password === '') {
      Alert.alert('Email and password are mandatory.');
      return;
    }

    try {
      console.log("Data sent ==",value.email, value.password)
      let res = await signInWithEmailAndPassword(auth, value.email, value.password);
      console.log("response ===", res.user)
    } catch (error) {
      navigation.navigate('Welcome');
    }
  }

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
      <View style={styles.controls}>
        <Input
          placeholder='Email'
          containerStyle={styles.control}
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
          leftIcon={<Icon
            name='envelope'
            size={16}
          />}
        />
        <Input
          placeholder='Password'
          containerStyle={styles.control}
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry={true}
          leftIcon={<Icon
            name='key'
            size={16}
          />}
        />
        <Button title="Sign in" buttonStyle={styles.control} onPress={()=>{
          console.log("first")
          signIn()}} />
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
export { auth, db };