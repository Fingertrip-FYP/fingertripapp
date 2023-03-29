import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';

export default function ChooseLanguageScreen() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Italian',
    'Chinese',
    'Japanese',
    'Korean',
    'Tamil',
    'Gujarati',
    'Sanskrit',
    'Malyalam',
    'Marathi',
    'Arabian',
    'Mandarin',
    'Konkani',
  ];

  const navigation = useNavigation();

  const handleLanguagePress = (language) => {
    navigation.navigate('SignIn');
  };

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'poppins-medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'poppins-semibold': require('../assets/fonts/Poppins-SemiBold.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  return (
    <ImageBackground
      source={require('../assets/languagechoose-bg.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Choose Language</Text>
        <ScrollView style={styles.scrollView}>
          {languages.map((language) => (
            <TouchableOpacity
              key={language}
              style={styles.languageButton}
              onPress={() => handleLanguagePress(language)}
            >
              <Text style={styles.languageText}>{language}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'poppins-semibold',
    fontSize: 30,
    color: '#36454F',
    marginBottom: 50,
  },
  scrollView: {
    width: '60%',
    maxHeight: '60%',
  },
  languageButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: '#F3F3F3',
    borderRadius: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  languageText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#36454F',
  },
});