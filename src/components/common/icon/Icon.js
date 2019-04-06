import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const IconComponent = props => {
  const { name, size = 24, color = '#546bfb', style, ...extraProps } = props;

  return (
    <Icon
      name={name}
      size={size}
      color={color}
      style={[style]}
      {...extraProps}
    />
  );
};

export default IconComponent;
