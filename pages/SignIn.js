import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SignInScreen() {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const express = require('express');
  const mysql = require('mysql');
  const bodyParser = require('body-parser');
  const app = express();

  const connection = mysql.createConnection({
    host: '127.0.0.1:3306',
    user: 'root',
    password: 'ShinigamiLeo3000@',
    database: 'fingertrip',
  });

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;

    connection.query(query, (err, results, fields) => {
      if (err) throw err;

      if (results.length > 0) {
        res.status(200).json({ message: 'Success' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    });
  });

  app.listen(3306, () => {
    console.log('Server started on port 3000');
  });


  const handleSignIn = () => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    fetch('http://127.0.0.1:3306/signin', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          navigation.navigate('Welcome');
        } else {
          Alert.alert('Invalid credentials');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

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