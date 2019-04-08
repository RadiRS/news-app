import 'react-native';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import UserMenuItem from '../../../src/components/user/UserMenuItem';

test('renders UserMenuItem component correctly', () => {
  const tree = renderer
    .create(<UserMenuItem icon="ios-add" title="" text="" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
