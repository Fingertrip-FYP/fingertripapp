import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import * as Font from 'expo-font';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Splash');
    }, 5000);

    return () => {
      clearTimeout(5000);
    };
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
          <Image source={require('../assets/welcome-logo.png')} style={styles.image} />
          <Text style={styles.text}>Welcome Name</Text>
          <Text style={styles.text1}>Enjoy your stay at the Taj</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundimage: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'poppins-bold',
    fontSize: 30,
    color: '#36454F',
    textAlign: 'center',
  },
  text1: {
    fontFamily: 'poppins-semibold',
    fontSize: 24,
    color: '#36454F',
    textAlign: 'center',
  },
});

export default Splash;