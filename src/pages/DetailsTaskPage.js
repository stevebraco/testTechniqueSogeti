/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import DetailsTask from '../components/DetailsTask/DetailsTask';
import { findTaskId } from '../lib/helpers';

const DetailsTaskPage = ({ data }) => {
  const { id } = useParams();

  const findTask = findTaskId(data, id);
  return <DetailsTask {...findTask} />;
};

export default DetailsTaskPage;
