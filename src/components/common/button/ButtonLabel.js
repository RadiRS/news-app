import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Colors } from '../../../themes';

const ButtonLabel = props => {
  const {
    buttonColor = Colors.primary,
    labelColor = Colors.textButton,
    label,
    ...restprops
  } = props;

  return (
    <TouchableOpacity style={{ backgroundColor: buttonColor }} {...restprops}>
      <Text style={{ fontSize: 20, color: labelColor }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLabel;
