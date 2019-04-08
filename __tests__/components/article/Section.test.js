import 'react-native';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import Section from '../../../src/components/article/section';

test('renders Section component with data article correctly', () => {
  const tree = renderer.create(<Section article={dummyDataArticle} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders Section component with data search article correctly', () => {
  const tree = renderer
    .create(<Section searchResult article={dummySearchDataArticle} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

const dummyDataArticle = {
  title: 'Testing title',
  multimedia: [],
  byline: 'Radi Rasadi',
  published_date: '2019-04-08T18:06:10-04:00'
};

const dummySearchDataArticle = {
  headline: { main: 'Testing title' },
  multimedia: [],
  byline: { original: 'Radi Rasadi' },
  pub_date: '2019-04-08T18:06:10-04:00'
};
