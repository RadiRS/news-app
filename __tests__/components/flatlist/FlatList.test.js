import 'react-native';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import FlatListComponent from '../../../src/components/flastlist';

test('renders Flatlist component correctly', () => {
  const tree = renderer
    .create(<FlatListComponent data={[]} renderItem={{}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
