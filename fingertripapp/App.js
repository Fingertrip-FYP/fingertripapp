import React, { useEffect, useState } from 'react';
import { 
  View, 
  TextInput, 
  StyleSheet, 
  ImageBackground, 
  SafeAreaView, 
  Text, 
  FlatList, 
  ScrollView, 
  Pressable, 
  Image, 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarouselCards from './pages/carouselcards';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {Credentials} from 'realm';
// import * as i18n from './pages/i18n';
// import LocalizationContext from './pages/localisationcontext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const realm = Realm.App.getApp("645b595c036f883fb29d4481");

// function logInAnonymousUser() {
//   app.logIn(Credentials.anonymous());
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Language"
          component={Language}
        /> */}
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="EnterName"
          component={EnterName}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="HomePage"
          component={NavBar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function EmptyScreen() {
  return <View />;
}

// Bottom Navbar
function NavBar() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false, }}/>
      <Tab.Screen name="Food" component={Food} options={{ headerShown: false, }} />
      <Tab.Screen name="Service" component={Services} options={{ headerShown: false, }} />
      <Tab.Screen name="Explore" component={Explore} options={{ headerShown: false, }} />
      <Tab.Screen name="User" component={EmptyScreen} options={{ headerShown: false, }} />
    </Tab.Navigator>
  );
}

// SignIn Screen
function SignIn({navigation}) {
  this.state = {
    username: '',
    password: '',
  }
  // Verify auth
  // function auth() {
  //   const users = realm.collection("Users");
  //   const curr_user = users.find({userid: username})
  //   console.log(curr_user)
  //   // () => navigation.navigate('Welcome')
  // }

  return (
    <ImageBackground source={require('./assets/bg/signin.png')} style={styles.image}>
      <Text style={styles.screenname}>Sign In</Text>
      <Text style={styles.inputhead}>User ID</Text>
      <TextInput
        value={this.state.username}
        onChangeText={(username) => this.setState({ username })}
        placeholder={'Enter your User ID'}
        style={styles.input}
      />
      <Text style={styles.inputhead}>Password</Text>
      <TextInput
        value={this.state.password}
        onChangeText={(password) => this.setState({ password })}
        placeholder={'Enter Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <Pressable style={styles.submitbutton} onPress={() => navigation.navigate(EnterName)}>
        <Text style={styles.submittext}>Continue</Text>
      </Pressable>
    </ImageBackground>
  );
}

// Enter guest name
function EnterName({navigation}) {
  // Verify auth
  // function auth() {
  //   const users = realm.collection("Users");
  //   const curr_user = users.find({userid: username})
  //   console.log(curr_user)
  //   // () => navigation.navigate('Welcome')
  // }
  const [guestname, setGuestname] = useState('');
  const [roomno, setRoomno] = useState('');

  return (
    <ImageBackground source={require('./assets/bg/signin.png')} style={styles.image}>
      <Text style={styles.screenname}>Enter Your Name</Text>
      <TextInput
        placeholder={'Enter name here'}
        onChangeText={newguestname => setGuestname({newguestname})}
        style={styles.input}
      />
      <TextInput
        placeholder={'Enter room number'}
        onChangeText={newroomno => setRoomno({newroomno})}
        style={styles.input}
      />
      <Pressable style={styles.submitbutton} onPress={() => navigation.navigate('Welcome', { 
        params: { nameguest: 'kartik', noroom: '503' },
        })}>
        <Text style={styles.submittext}>Submit</Text>
      </Pressable>
    </ImageBackground>
  );
}

// Welcome Screen
function Welcome({ route, navigation }) {
  const { nameguest } = route.params;

  useEffect(() => {
    const countTimer = setInterval(() => {
      navigation.navigate('HomePage')
    }, 5000);

    return function cleanup() {
      clearInterval(countTimer);
    };
  });

  return(
    <ImageBackground source={require('./assets/bg/welcome.png')} style={styles.image}>
      <Image style={styles.welcomelogo} source={require('./assets/icons/room.png')}/>
      <Text style={styles.welscreenname}>Welcome {JSON.stringify(nameguest)}</Text>
    </ImageBackground>
  )
  // {JSON.stringify(guestname)}
}

// Language Selection Screen
function Language() {
  const [locale, setLocale] = React.useState(i18n.DEFAULT_LANGUAGE);
  const localizationContext = React.useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, {locale, ...options}),
      locale,
      setLocale,
    }),
    [locale],
  );

  const handleLocalizationChange = useCallback(
    (newLocale) => {
      const newSetLocale = i18n.setI18nConfig(newLocale);
      setLocale(newSetLocale);
    },
    [locale],
  );

  useEffect(() => {
    handleLocalizationChange();

    RNLocalize.addEventListener('change', handleLocalizationChange);
    return () => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    };
  }, []);

  return (
    <LocalizationContext.Provider value={localizationContext}>
        <HomeScreen localizationChange={handleLocalizationChange} />
      </LocalizationContext.Provider>
  );
}

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
    <ImageBackground source={require('./assets/bg/welcome.png')} style={styles.image}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ height: 100 }}>
            <Image source={require('./assets/icons/room.png')} style={{ height: 50, width: 56, top: 40 }}/>
            <Text style={{ left: 56, fontWeight: 500 }}>Room No. 503</Text>
          </View>
          
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
            <View style={styles.box}>
              <Image source={require('./assets/icons/Meal-option.png')} style={{backgroundColor: 'rgba(255, 255, 255, 0.6)', width: 84, height: 80}}></Image>
              <Text style={styles.optionstitle}>Food</Text>
            </View>
            <View style={styles.box}>
              <Image source={require('./assets/icons/Services-option.png')} style={{backgroundColor: 'rgba(255, 255, 255, 0.6)', width: 84, height: 80}}></Image>
              <Text style={styles.optionstitle}>Services</Text>
            </View>
            <View style={styles.box}>
              <Image source={require('./assets/icons/Explore-option.png')} style={{backgroundColor: 'rgba(255, 255, 255, 0.6)', width: 84, height: 80}}></Image>
              <Text style={styles.optionstitle}>Explore</Text>
            </View>
          </View>

          {/* Tagline */}
          <View style={styles.tagcontainer}>
            <Text style={{fontWeight: 300, fontSize: 30}}>Luxury is in the details!!</Text>
          </View>
          
          {/* Ads Promotion */}
          <SafeAreaView style={styles.adscontainer}>
            <CarouselCards />
          </SafeAreaView>        
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

// Food Screen
function Food() {
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
      <View style={{height: 40, backgroundColor: 'red'}}></View>
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
          />
        </View>
        <View>
          <ScrollView>
            <FlatList
              data={filteredDataSource}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={ItemSeparatorView}
              renderItem={ItemView}
            />  
          </ScrollView>
        </View>
    </SafeAreaView>
  );
}

// Services Screen
function Services() {
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
      <View style={{height: 40, backgroundColor: 'red'}}></View>
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
        />
      </View>
      <View>
        <ScrollView>
        <View>
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        </View>
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}

// Explore Screen
function Explore() {
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
      <View style={{height: 40, backgroundColor: 'red'}}></View>
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
          />
        </View>
        <View>
          <ScrollView>
            <FlatList
              data={filteredDataSource}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={ItemSeparatorView}
              renderItem={ItemView}
            />  
        </ScrollView>
        </View>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  screenname: {
    color: '#36454F',
    fontWeight: 500,
    fontSize: 26,
    left: 24,
    top: -240,      
  },
  input: {
    width: 250,
    height: 36,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 20,
    left: 46,
    color: '#36454F',
  },
  inputhead: {
    left: 46,
    color: '#36454F',
    fontWeight: 500,
  },
  submitbutton: {
    alignSelf: 'center',
    width: 300,
    height: 50,
    backgroundColor: '#1200DD',
    color: '#1200DD',
    borderRadius: 10,
  },
  submittext: {
    alignSelf: 'center',
    color: '#FAF9F6',
    fontWeight: '500',
    padding: 15,
  },
  welcomelogo: {
    alignSelf: 'center',
  },
  welscreenname: {
    color: '#36454F',
    fontWeight: 500,
    fontSize: 26,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  searchbarcontainer: {
    marginTop: 30,
    // alignSelf: 'center',
    marginLeft: 20,
  },
  searchbarinput: {
    width: 350,
    height: 52,
    paddingLeft: 20,
    backgroundColor: 'rgba(211, 211, 211, 0.6)',
    color: '#36454F',
    borderRadius: 10,
  },
  mainoptions: {
    width: 383,
    height: 113,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  optionstitle: {
    color: '#FAF9F6',
  },
  box: {
    height: 113,
    width: 84,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
    gap: 9,
  },
  tagcontainer: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  adscontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    width: 392,
  },
});