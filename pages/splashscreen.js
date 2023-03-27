import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';

const backgroundImage = require('../assets/splashscreen-bg.png');

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Language');
    }, 7000);

    return () => {
      clearTimeout(timeout);
    };
  }, [navigation]);

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}></ImageBackground>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default SplashScreen;