import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 5000);
  }, [navigation]);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'poppins-semibold': require('../assets/fonts/Poppins-SemiBold.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/welcome-bg.png')}
        style={styles.backgroundimage}
      >
        <View style={styles.overlay}>
          <Image source={require('./assets/welcome-logo.png')} style={styles.image} />
          <Text style={styles.text}>Welcome Name</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundimage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'poppins-bold',
    fontSize: 30,
    color: '#36454F',
    textAlign: 'center',
  },
});

export default Splash;