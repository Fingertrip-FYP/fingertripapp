import React, { useEffect } from 'react';
import { View, ImageBackground, Text, StyleSheet, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CarouselCards from './displaycarousel'
import FoodMenu from './food.js';
import ServicesMenu from './services.js';
import Explore from './explore.js';
import UserAc from './user.js';

const HomeScreen = () => {
  const Tab = createBottomTabNavigator();

  function HomeScreen() {

    return (
      <SafeAreaView style={styles.carouselcontainer}>
        <CarouselCards />
      </SafeAreaView>
    )

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
      </View>
    );
  }
  function FoodMenu() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Food</Text>
      </View>
    );
  }
  function ServicesMenu() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Services</Text>
      </View>
    );
  }
  function Explore() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Explore</Text>
      </View>
    );
  }
  function UserAc() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>User</Text>
      </View>
    );
  }

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'condiment': require('../assets/fonts/Condiment-Regular.ttf'),
        'poppins-semibold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  return (
    <><View style={styles.container}>
      <ImageBackground
        source={require('../assets/welcome-bg.png')}
        style={styles.backgroundimage}
      >
      </ImageBackground>
    </View><Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Food" component={FoodMenu} />
        <Tab.Screen name="Services" component={ServicesMenu} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="User" component={UserAc} />
      </Tab.Navigator></>
  );
};

const styles = StyleSheet.create({
  carouselcontainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
});

export default HomeScreen;