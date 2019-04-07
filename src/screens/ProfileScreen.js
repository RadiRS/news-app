import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Colors, Fonts } from '../themes';

class ProfileScreen extends Component {
  static navigationOptions = () => ({
    header: null
  });

  render() {
    const { name, email, gender, phone, photo } = this.props.user;

    return (
      <Container>
        <Cover>
          <Image source={{ uri: 'http://lorempixel.com/640/480' }} />
          <Avatar source={{ uri: photo }} />
        </Cover>
        <Content>
          <Wrapper>
            <Label>Display name</Label>
            <Text>{name}</Text>
          </Wrapper>
          <Wrapper>
            <Label>Email</Label>
            <Text>{email}</Text>
          </Wrapper>
          <Wrapper>
            <Label>Phone</Label>
            <Text>{phone}</Text>
          </Wrapper>
          <Wrapper>
            <Label>Gender</Label>
            <Text>{gender}</Text>
          </Wrapper>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.user
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${Colors.silver};
`;

const Cover = styled.View`
  height: 240px;
  background-color: ${Colors.darkGray};
  border-radius: 14px;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  border-radius: 14px;
`;

const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
`;

const Content = styled.View`
  margin-top: 20px;
`;

const Wrapper = styled.View`
  background-color: white;
  height: 80px;
  margin-bottom: 10px;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
`;

const Label = styled.Text`
  font-size: 18px;
  font-family: ${Fonts.type.bold};
  color: ${Colors.darkGray};
`;

const Text = styled.Text`
  font-size: 24px;
  font-family: ${Fonts.type.bold};
`;
