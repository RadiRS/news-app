import 'react-native';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { UserMenu } from '../../../src/components/user';

test('renders UserMenu component correctly', () => {
  const tree = renderer.create(<UserMenu user={user} menu={menu} />).toJSON();
  expect(tree).toMatchSnapshot();
});

const user = {
  name: '',
  email: ''
};

const menu = {
  openMenu: true
};
