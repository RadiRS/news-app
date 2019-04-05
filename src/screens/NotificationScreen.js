import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
// import ButtonLabel from '../components/common/button/ButtonLabel';
// import NavigationServices from '../navigator/NavigationServices';

class NotificationScreen extends Component {
  static navigationOptions = () => ({
    header: null
  });

  render() {
    return (
      <Container>
        <Text>Notification Screen</Text>
      </Container>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationScreen);

const Container = styled.View``;

const Text = styled.Text``;
