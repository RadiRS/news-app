import 'react-native';
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import Book from '../../../src/components/book/Book';

test('renders Book component correctly', () => {
  const tree = renderer.create(<Book book={book} />).toJSON();
  expect(tree).toMatchSnapshot();
});

const book = {
  multimedia: [],
  book_details: [{ title: '', contributor: '' }],
  published_date: ''
};
