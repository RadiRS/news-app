import 'react-native';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import Section from '../../../src/components/section';

test('renders Section component correctly', () => {
  const tree = renderer.create(<Section text="" />).toJSON();
  expect(tree).toMatchSnapshot();
});
