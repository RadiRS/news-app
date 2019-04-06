import React, { Component } from 'react';
import styled from 'styled-components';

export class Section extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Title>Test</Title>
          <Author>Test</Author>
          <Date>Test</Date>
        </Content>
        <Image source={{ uri: 'http://lorempixel.com/640/480' }} />
      </Container>
    );
  }
}

export default Section;

const Container = styled.View``;

const Content = styled.View``;

const Image = styled.Image``;

const Title = styled.Text``;

const Author = styled.Text``;

const Date = styled.Text``;
