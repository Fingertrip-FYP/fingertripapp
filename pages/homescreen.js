import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';

const Screen1 = () => (
  <View>
    <Text>Screen 1</Text>
  </View>
);

const Screen2 = () => (
  <View>
    <Text>Screen 2</Text>
  </View>
);

const Screen3 = () => (
  <View>
    <Text>Screen 3</Text>
  </View>
);

const BottomNavBar = createBottomTabNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" color={tintColor} />
      ),
    },
  },
  Screen2: {
    screen: Screen2,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search" color={tintColor} />
      ),
    },
  },
  Screen3: {
    screen: Screen3,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="settings" color={tintColor} />
      ),
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
  },
});

export default function App() {
  return (
    <BottomNavBar />
  );
}