import React from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';
import DateStyles from './DateStyles';

const Date = ({ date }) => {
  const time = parseISO(date);
  const timePeriod = formatDistanceToNow(time);
  return <DateStyles> {timePeriod} ago</DateStyles>;
};

export default Date;
