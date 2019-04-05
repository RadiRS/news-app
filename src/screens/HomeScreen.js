import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ButtonLabel from '../components/common/button/ButtonLabel';
// import NavigationServices from '../navigator/NavigationServices';

class HomeScreen extends Component {
  static navigationOptions = () => ({
    header: null
  });

  render() {
    return (
      <Container>
        <ButtonLabel
          // onPress={() => NavigationServices.navigate('Another')}
          block
          label="Go to another screen"
        />
      </Container>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const Container = styled.View``;
