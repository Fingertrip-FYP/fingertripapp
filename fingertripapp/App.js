import React, { useEffect, useState } from 'react';
import { 
  View, 
  TextInput, 
  StyleSheet, 
  ImageBackground, 
  Button, 
  SafeAreaView, 
  Text, 
  FlatList, 
  ScrollView, 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarouselCards from './pages/carouselcards';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import * as i18n from './pages/i18n';
// import LocalizationContext from './pages/localisationcontext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerLeft: null,
      }}>
        {/* <Stack.Screen
          name="Language"
          component={Language}
        /> */}
        <Stack.Screen
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function EmptyScreen() {
  return <View />;
}

// // Bottom Navbar
// function NavBar() {
//   return(
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Food" component={EmptyScreen} />
//       <Tab.Screen name="Service" component={EmptyScreen} />
//       <Tab.Screen name="Explore" component={EmptyScreen} />
//       <Tab.Screen name="User" component={EmptyScreen} />
//     </Tab.Navigator>
//   );
// }

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
function Home({ navigation }) {
  // Search Bar
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
          {/* SearchBar */}
        <View style={styles.searchbarcontainer}>
          <TextInput
            style={styles.searchbarinput}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            // ItemSeparatorComponent={ItemSeparatorView}
            // renderItem={ItemView}
          />
        </View>
        
        {/* Main Options */}
        <View style={styles.mainoptions}>
          <View style={[styles.box, {flex: 1, backgroundColor: 'red'}]} />
          <View style={[styles.box, {flex: 1, backgroundColor: 'orange'}]} />
          <View style={[styles.box, {flex: 1, backgroundColor: 'green'}]} />
        </View>

        {/* Tagline */}
        <View style={styles.tagcontainer}>
          <Text style={styles.tagline}>Luxury is in the details!!</Text>
        </View>
        
        {/* Ads Promotion */}
        <SafeAreaView style={styles.adscontainer}>
          <CarouselCards />
        </SafeAreaView>        
      </ScrollView>
    </SafeAreaView>
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
  searchbarcontainer: {
    marginTop: 30,
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  searchbarinput: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  mainoptions: {
    marginTop: 50,
    flexDirection: 'row',
    padding: 30,
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
  },
  box: {
    height: 150,
  },
  tagcontainer: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  adscontainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
