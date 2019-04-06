import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class SearchScreen extends Component {
  static navigationOptions = () => ({
    header: null
  });

  render() {
    return (
      <Container>
        <Text>Search Screen</Text>
      </Container>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScreen);

const Container = styled.View``;

const Text = styled.Text``;