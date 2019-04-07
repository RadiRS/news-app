import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';
// Components
import Icon from '../components/common/icon';
// Screens
import { Home, Book, Search, Notification, Profile, Article } from '../screens';

// Colors
const activeColor = '#4775f2';
const inactiveColor = '#b8bece';

// Home Stack Navigator
const HomeStackNavigator = createStackNavigator(
  {
    Home,
    Article
  },
  { mode: 'modal' }
);

HomeStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName === 'Article') {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => (
      <Icon
        name="ios-home"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    )
  };
};

// Book Stack Navigator
const BookStackNavigator = createStackNavigator(
  {
    Book
  },
  { mode: 'modal' }
);

BookStackNavigator.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Icon
      name="ios-book"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

// Search Stack Navigator
const SearchStackNavigator = createStackNavigator(
  {
    Search
  },
  { mode: 'modal' }
);

SearchStackNavigator.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Icon
      name="ios-search"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

// Notification Stack Navigator
const NotificationStackNavigator = createStackNavigator(
  {
    Notification
  },
  { mode: 'modal' }
);

NotificationStackNavigator.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Icon
      name="ios-notifications"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

// Profile Stack Navigator
const ProfileStackNavigator = createStackNavigator(
  {
    Profile
  },
  { mode: 'modal' }
);

ProfileStackNavigator.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Icon
      name="ios-person"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

// Bottom Tab Navigator
const BottomTabNavigator = createBottomTabNavigator({
  Home: HomeStackNavigator,
  Book: BookStackNavigator,
  Search: SearchStackNavigator,
  Notification: NotificationStackNavigator,
  Profile: ProfileStackNavigator
});

// App Container
const AppContainer = createAppContainer(BottomTabNavigator);

export default AppContainer;
