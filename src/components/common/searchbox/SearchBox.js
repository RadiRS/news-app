import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';
import Icon from '../icon';
import { Colors } from '../../../themes';

const SearchBox = props => {
  const { onPress, onChangeText, placeholder, disabled } = props;
  return (
    <KeyboardAvoidingView>
      <Container>
        <TextInput onChangeText={onChangeText} placeholder={placeholder} />
        <Button onPress={onPress} disabled={disabled}>
          <Icon name="ios-search" />
        </Button>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default SearchBox;

const Container = styled.View`
  elevation: 2px;
  flex-direction: row;
  height: 60px;
  border-width: 2px;
  border-color: ${Colors.cloud};
  border-radius: 14px;
  margin: 10px 20px;
  padding: 5px;
  align-items: center;
  /* justify-content: center; */
`;

const TextInput = styled.TextInput`
  font-size: 18px;
  background-color: white;
  flex: 0.9;
  border-radius: 14px;
`;

const Button = styled.TouchableOpacity`
  flex: 0.1;
  align-items: center;
  justify-content: center;
`;
