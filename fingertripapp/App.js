import React, { useEffect, useState, useRef } from 'react';
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
  Alert, 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarouselCards from './pages/carouselcards';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import app from './backend/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";
import RBSheet from "react-native-raw-bottom-sheet";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const auth = getAuth(app);
const db = getFirestore(app);

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
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  })

  async function signIn() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
      const docRef = await setDoc(doc(db, "users", "guest"), {
        email: value.email,
      });
      navigation.navigate(EnterName)
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }

  return (
    <ImageBackground source={require('./assets/bg/signin.png')} style={styles.image}>

      <Text style={styles.screenname}>Sign In</Text>
      
      <Text style={styles.inputhead}>Email ID</Text>
      <TextInput
        value={value.email}
        onChangeText={(text) => setValue({ ...value, email: text })}
        placeholder={'Enter your email ID'}
        style={styles.input}
      />
      
      <Text style={styles.inputhead}>Password</Text>
      <TextInput
        value={value.password}
        onChangeText={(text) => setValue({ ...value, password: text })}
        placeholder={'Enter Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      
      <Pressable style={styles.submitbutton} onPress={signIn}>
        <Text style={styles.submittext}>Continue</Text>
      </Pressable>

      {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}
    </ImageBackground>
  );
}

// Enter guest name
function EnterName({navigation}) {
  // Verify auth
  // function auth() {
  //   const users = realm.collection("Users");
  //   const curr_user = users.find({userid: email})
  //   console.log(curr_user)
  //   // () => navigation.navigate('Welcome')
  // }
  const [value, setValue] = React.useState({
    guestname: '',
    roomno: '',
  })

  async function register() {
    const userdata = doc(db, 'users', 'guest');
    setDoc(
      userdata, 
      { 
        name: value.guestname, 
        roomno: value.roomno,
      },
      { merge: true });
    navigation.navigate('Welcome')
  }

  return (
    <ImageBackground source={require('./assets/bg/signin.png')} style={styles.image}>
      <Text style={styles.screenname}>Enter Your Name</Text>
      <TextInput
        placeholder={'Enter name here'}
        onChangeText={(text) => setValue({ ...value, guestname: text })}
        style={styles.input}
      />
      <TextInput
        placeholder={'Enter room number'}
        onChangeText={(text) => setValue({ ...value, roomno: text })}
        style={styles.input}
      />
      <Pressable style={styles.submitbutton} onPress={register}>
        <Text style={styles.submittext}>Submit</Text>
      </Pressable>
    </ImageBackground>
  );
}

// Welcome Screen
function Welcome({ navigation }) {  
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
      <Text style={styles.welscreenname}>Welcome</Text>
    </ImageBackground>
  )
  // {JSON.stringify(guestname)}
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
            <Pressable style={styles.box} onPress={() => navigation.navigate(Food)}>
              <Image source={require('./assets/icons/Meal-option.png')} style={{width: 80, height: 76}}></Image>
              <Text style={styles.optionstitle}>Food</Text>
            </Pressable>
            <Pressable style={styles.box} onPress={() => navigation.navigate(Services)}>
              <Image source={require('./assets/icons/Services-option.png')} style={{width: 80, height: 76}}></Image>
              <Text style={styles.optionstitle}>Services</Text>
            </Pressable>
            <Pressable style={styles.box} onPress={() => navigation.navigate(Explore)}>
              <Image source={require('./assets/icons/Explore-option.png')} style={{width: 80, height: 76}}></Image>
              <Text style={styles.optionstitle}>Explore</Text>
            </Pressable>
          </View>

          {/* Tagline */}
          <View style={styles.tagcontainer}>
            <Text style={{fontWeight: 300, fontSize: 20}}>Luxury is in the details!!</Text>
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
    <ImageBackground source={require('./assets/bg/food.png')} style={styles.image}>
      <SafeAreaView style={{ flex: 1 }}>
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
          />
        </View>

        <View style={styles.menu}>
          <ScrollView>
            <View style={styles.menucard}>
              <Text>Hello</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

// Services Screen
function Services() {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const cleaningref = useRef();
  const essentialref = useRef();
  const techref = useRef();
  const laundryref = useRef();
  const [value, setValue] = React.useState({
    servicetitle: '',
  })

  async function register() {
    const servicedata = doc(db, 'services', 'current');
    setDoc(
      servicedata, 
      {
        service: value.servicetitle,
      },
      );
    navigation.navigate('Services')
  }

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
  <ImageBackground source={require('./assets/bg/services.png')} style={styles.image}>
    <SafeAreaView style={{ flex: 1 }}>
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
        />
      </View>
      
      <Pressable style={[styles.servicescard, {left: 21, top: 220,}]} onPress={() => cleaningref.current.open()}>
        <Image source={require('./assets/icons/Cleaning-services.png')} style={styles.cardimage}/>
        <Text style={styles.cardtitle}>Cleaning Services</Text>
        <RBSheet
          ref={cleaningref}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            container: {
              height: 500,
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
          }}
        >
          <Text style={{
            position: 'absolute',
            width: 227,
            height: 39,
            left: 102,
            top: 34,
            fontWeight: 500,
            fontSize: 26,
            lineHeight: 39,
            textAlign: 'center',
            color: '#36454F',
            }}>Essential Delivery</Text>
            <Pressable style={[styles.options, {left: 30, top: 93}]} onPress={send}>
              <Image source={require('./assets/icons/Towel.png')} style={[styles.optionimage, {left: 0, top: 0}]}/>
              <Text style={[styles.optiontitle, {left: 9, top: 70,}]}>Towel</Text>
            </Pressable>
          </RBSheet>
      </Pressable>
      <Pressable style={[styles.servicescard, {left: 21, top: 350,}]} onPress={() => cleaningref.current.open()}>
        <Image source={require('./assets/icons/Essential-services.png')} style={styles.cardimage}/>
        <Text style={styles.cardtitle}>Essential Services</Text>
      </Pressable>
      <Pressable style={[styles.servicescard, {left: 21, top: 500,}]} onPress={() => cleaningref.current.open()}>
        <Image source={require('./assets/icons/Tech-support.png')} style={styles.cardimage}/>
        <Text style={styles.cardtitle}>Tech Services</Text>
      </Pressable>
      <Pressable style={[styles.servicescard, {left: 21, top: 650,}]} onPress={() => cleaningref.current.open()}>
        <Image source={require('./assets/icons/Laundry-services.png')} style={styles.cardimage}/>
        <Text style={styles.cardtitle}>Laundry Services</Text>
      </Pressable>
    </SafeAreaView>
</ImageBackground>
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
    marginTop: 10,
    // alignSelf: 'center',
    margin: 20,
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
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  optionstitle: {
    color: '#36454F',
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
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  adscontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    width: 392,
  },
  error: {
    marginTop: 10,
    padding: 10,
    color: '#36454F',
    alignSelf: 'center',
    fontWeight: 200,
  },
  menu: {
    padding: 20,
  },
  menucard: {
    position: 'absolute',
    width: 374,
    height: 120,
    left: 0,
    top: 0,
    backgroundColor: 'red',
  },
  servicescard: {
    position: 'absolute',
    width: 380,
    height: 80,
  },
  cardimage: {
    position: 'absolute',
    width: 80,
    height: 80,
    left: 0,
    top: 0,
  },
  cardtitle: {
    position: 'absolute',
    width: 175,
    height: 24,
    left: 137,
    top: 29,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 24,
    color: '#36454F',
  },
  options: {
    position: 'absolute',
    width: 70,
    height: 97,
  },
  optionimage: {
    position: 'absolute',
    width: 70,
    height: 70,
  },
  optiontitle: {
    position: 'absolute',
    width: 52,
    height: 27,
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
    color: '#36454F',
  },
});