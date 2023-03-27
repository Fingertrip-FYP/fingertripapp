import React from 'react';
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ChooseLanguageScreen() {
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 40,
  },
  scrollView: {
    width: '80%',
    maxHeight: '60%',
    marginBottom: 40,
  },
  languageButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  languageText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});