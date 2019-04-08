import 'react-native';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from '../../../src/components/avatar';

test('renders Avatar component correctly', () => {
  const tree = renderer.create(<Avatar photo={photo} />).toJSON();
  expect(tree).toMatchSnapshot();
});

const photo = 'http://lorempixel.com/640/480';
