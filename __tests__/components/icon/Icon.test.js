import 'react-native';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import IconComponent from '../../../src/components/common/icon/Icon';

test('renders Icon component correctly', () => {
  const tree = renderer
    .create(<IconComponent name="ios-add" size={0} color="#fff" style={{}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
