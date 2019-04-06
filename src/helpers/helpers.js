import moment from 'moment';

export const formatTime = time =>
  moment(time).format('MMMM Do YYYY, h:mm:ss a');
