import React, { useEffect } from 'react';
import { View, ImageBackground } from 'react-native';

const WelcomeScreen = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); // navigate to the home screen after 5 seconds
    }, 5000);
    return () => clearTimeout(timer); // clear the timer when the component is unmounted
  }, []);

  return (
    <ImageBackground source={require('../assets/welcome-bg.png')} style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* add your welcome screen content here */}
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;