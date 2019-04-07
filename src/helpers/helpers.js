import moment from 'moment';

export const formatTime = time => {
  moment(time).format('MMMM Do YYYY, h:mm:ss a');
};

export const containBooks = (data, query) => {
  const {
    title,
    contributor,
    author,
    publisher,
    description
  } = data.book_details[0];

  if (
    title.toLowerCase().includes(query) ||
    contributor.toLowerCase().includes(query) ||
    author.toLowerCase().includes(query) ||
    publisher.toLowerCase().includes(query) ||
    description.toLowerCase().includes(query)
  ) {
    return true;
  }
  return false;
};
