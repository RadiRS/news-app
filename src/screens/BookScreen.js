import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
// import ButtonLabel from '../components/common/button/ButtonLabel';
// import NavigationServices from '../navigator/NavigationServices';

class BookScreen extends Component {
  static navigationOptions = () => ({
    header: null
  });

  render() {
    return (
      <Container>
        <Text>Book Screen</Text>
      </Container>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookScreen);

const Container = styled.View``;

const Text = styled.Text``;
