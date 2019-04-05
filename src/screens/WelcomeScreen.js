import React, { Component } from 'react';
import { View } from 'react-native';
import ButtonLabel from '../components/common/button/ButtonLabel';
import NavigationServices from '../navigator/NavigationServices';

class WelcomeScreen extends Component {
  render() {
    return (
      <View>
        <ButtonLabel
          onPress={() => NavigationServices.navigate('Another')}
          block
          label="Go to another screen"
        />
      </View>
    );
  }
}

export default WelcomeScreen;
