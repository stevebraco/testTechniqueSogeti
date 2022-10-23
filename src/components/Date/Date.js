import React from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';
import DateStyles from './DateStyles';

const Date = ({ date }) => {
  let timeAgo = '';
  if (date) {
    const time = parseISO(date);
    const timePeriod = formatDistanceToNow(time);
    timeAgo = `${timePeriod} ago`;
  }
  return <DateStyles> {timeAgo} </DateStyles>;
};

export default Date;
