import React from 'react';
import styled from 'styled-components';

const Avatar = props => <Image source={{ uri: props.photo }} />;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
`;

export default Avatar;
