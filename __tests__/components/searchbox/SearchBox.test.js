import 'react-native';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import SearchBox from '../../../src/components/common/searchbox';

test('renders SearchBox component correctly', () => {
  const tree = renderer
    .create(
      <SearchBox onPress={() => ''} onChangeText={() => ''} placeholder="" />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
