import React from 'react';
import styled from 'styled-components';
import { Fonts } from '../../../themes';

const Populer = props => {
  const { image, title, byline, date } = props;

  return (
    <Container>
      <Cover>
        <Image source={{ uri: image }} />
      </Cover>
      <Content>
        <Title>{title}</Title>
        <Author>{byline}</Author>
        <Date>{date}</Date>
      </Content>
    </Container>
  );
};

export default Populer;

const Container = styled.View`
  background: white;
  width: 390px;
  height: 320px;
  border-radius: 14px;
  margin: 10px 10px 20px 10px;
  elevation: 10;
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
`;

const Image = styled.Image`
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Content = styled.View`
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const Author = styled.Text`
  color: #b8bece;
  font-size: 15px;
  font-weight: ${Fonts.weight.large};
  margin-top: 2px;
`;

const Date = styled.Text`
  color: #b8bece;
  font-size: 15px;
  font-weight: ${Fonts.weight.large};
  margin-top: 2px;
`;
