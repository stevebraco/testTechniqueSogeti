/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailsTask from '../components/DetailsTask/DetailsTask';
import { useTasksContext } from '../context/tasks_context';
import { findTaskId } from '../lib/helpers';

const DetailsTaskPage = () => {
  const { id } = useParams();
  const { fetchTask, task } = useTasksContext();

  useEffect(() => {
    fetchTask(id);
  }, [id]);

  return <DetailsTask {...task} />;
};

export default DetailsTaskPage;
