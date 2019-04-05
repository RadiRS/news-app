import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/stores/store';
import AppContainerNavigator from './src/navigator/AppNavigator';
import NavigationService from './src/navigator/NavigationServices';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainerNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
