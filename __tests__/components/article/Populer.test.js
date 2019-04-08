import 'react-native';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import Populer from '../../../src/components/article/populer';

test('renders Populer component correctly', () => {
  const tree = renderer.create(<Populer article={dummyDataArticle} />).toJSON();
  expect(tree).toMatchSnapshot();
});

const dummyDataArticle = {
  title: 'Testing title',
  multimedia: [],
  byline: 'Radi Rasadi',
  published_date: '2019-04-08T18:06:10-04:00'
};
