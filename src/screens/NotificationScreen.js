import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Icon from '../components/common/icon';
import { Colors, Fonts } from '../themes';

class NotificationScreen extends Component {
  static navigationOptions = () => ({
    header: null
  });

  render() {
    return (
      <Container>
        <Icon name="ios-notifications" color={Colors.darkGray} />
        <Text>Dont have any notifications</Text>
      </Container>
    );
  }
}

export default NotificationScreen;

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.silver};
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 24px;
  font-family: ${Fonts.type.bold};
`;
