import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';
// Components
// import DrawerNavigator from '../components/drawer/DrawerNavigator';
// Screens
import { Home, Book, Search, Notification, Profile } from '../screens';

// Home Stack Navigator
const HomeStackNavigator = createStackNavigator(
  {
    Home
  },
  { mode: 'modal' }
);

// Book Stack Navigator
const BookStackNavigator = createStackNavigator(
  {
    Book
  },
  { mode: 'modal' }
);

// Search Stack Navigator
const SearchStackNavigator = createStackNavigator(
  {
    Search
  },
  { mode: 'modal' }
);

// Notification Stack Navigator
const NotificationStackNavigator = createStackNavigator(
  {
    Notification
  },
  { mode: 'modal' }
);

// Profile Stack Navigator
const ProfileStackNavigator = createStackNavigator(
  {
    Profile
  },
  { mode: 'modal' }
);

// Bottom Tab Navigator
const BottomTabNavigator = createBottomTabNavigator({
  Home: HomeStackNavigator,
  Book: BookStackNavigator,
  Search: SearchStackNavigator,
  Notification: NotificationStackNavigator,
  Profile: ProfileStackNavigator
});

// App Switch Navigator
// const AppSwitchNavigator = createSwitchNavigator({
//   Splash,
//   AuthMethod,
//   Signin,
//   Signup,
//   AppDrawerNavigator
// });

// App Container
const AppContainer = createAppContainer(BottomTabNavigator);

export default AppContainer;
