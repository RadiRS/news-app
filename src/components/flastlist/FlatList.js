import React from 'react';
import { FlatList } from 'react-native';

const FlatListComponent = props => {
  const { data, renderItem, ...extraProps } = props;

  const keyExtractor = index => index.toString();

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      {...extraProps}
    />
  );
};

export default FlatListComponent;
