import React, {useEffect, useCallback} from 'react';
import { View, TextInput, StyleSheet, ImageBackground, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import * as i18n from './pages/i18n';
// import LocalizationContext from './pages/localisationcontext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Language"
          component={Language}
        /> */}
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{title: 'signin'}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// SignIn Screen
function SignIn({navigation}) {
  this.state = {
    username: '',
    password: '',
  };

  return (
    <View style={styles.signincontainer}>
      <TextInput
        value={this.state.username}
        onChangeText={(username) => this.setState({ username })}
        placeholder={'Username'}
        style={styles.input}
      />
      <TextInput
        value={this.state.password}
        onChangeText={(password) => this.setState({ password })}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      
      <Button
        title={'Login'}
        style={styles.input}
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  );
};

// Welcome Screen
function Welcome({navigation}) {
  const image = { uri: "https://docs.expo.dev/static/images/tutorial/splash.png" };

  useEffect(() => {
    const countTimer = setInterval(() => {
      navigation.navigate('Home')
    }, 5000);

    return function cleanup() {
      clearInterval(countTimer);
    };
  });

  return(
    <View>
        <ImageBackground source={image} resizeMode="cover"></ImageBackground>
    </View>
  )
};

// Language Selection Screen
// function Language() {
//   const [locale, setLocale] = React.useState(i18n.DEFAULT_LANGUAGE);
//   const localizationContext = React.useMemo(
//     () => ({
//       t: (scope, options) => i18n.t(scope, {locale, ...options}),
//       locale,
//       setLocale,
//     }),
//     [locale],
//   );

//   const handleLocalizationChange = useCallback(
//     (newLocale) => {
//       const newSetLocale = i18n.setI18nConfig(newLocale);
//       setLocale(newSetLocale);
//     },
//     [locale],
//   );

//   useEffect(() => {
//     handleLocalizationChange();

//     RNLocalize.addEventListener('change', handleLocalizationChange);
//     return () => {
//       RNLocalize.removeEventListener('change', handleLocalizationChange);
//     };
//   }, []);

//   return (
//     <LocalizationContext.Provider value={localizationContext}>
//         <HomeScreen localizationChange={handleLocalizationChange} />
//       </LocalizationContext.Provider>
//   );
// }

// Home Screen
function Home() {
  this.state = {
    username: '',
    password: '',
  };

  return (
    <View style={styles.signincontainer}>
      <TextInput
        value={this.state.username}
        onChangeText={(username) => this.setState({ username })}
        placeholder={'Username'}
        style={styles.input}
      />
      <TextInput
        value={this.state.password}
        onChangeText={(password) => this.setState({ password })}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      
      <Button
        title={'Login'}
        style={styles.input}
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  signincontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
