import React from 'react';
import styled from 'styled-components';
import { Fonts } from '../../themes';

const Section = props => {
  const { text } = props;

  return (
    <Container onLongPress={() => alert(text)}>
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: white;
  height: 60px;
  padding: 12px;
  margin: 8px;
  border-radius: 10px;
  elevation: 5;
`;

const Text = styled.Text`
  font-family: ${Fonts.type.bold};
  font-size: 16px;
  font-weight: ${Fonts.weight.large};
`;

export default Section;
