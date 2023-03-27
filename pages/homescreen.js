import React from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/welcome-bg.png')} style={styles.background}>
        <View style={styles.header}>
          <Image source={require('../assets/welcome-bg.png')} style={styles.logo} />
          <TouchableOpacity style={styles.searchButton}>
            <Image source={require('../assets/welcome-bg.png')} style={styles.searchIcon} />
            <Text style={styles.searchText}>Search for restaurants, cuisines or dishes</Text>
          </TouchableOpacity>
          <Image source={require('../assets/welcome-bg.png')} style={styles.profileIcon} />
        </View>
        <View style={styles.categories}>
          {/* add category icons here */}
        </View>
        <View style={styles.offers}>
          {/* add offer banners here */}
        </View>
        <View style={styles.restaurants}>
          {/* add restaurant listings here */}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  logo: {
    width: 120,
    height: 30,
  },
  searchButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchText: {
    marginLeft: 10,
    color: 'gray',
    fontSize: 14,
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 10,
  },
  categories: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  offers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  restaurants: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default HomeScreen;