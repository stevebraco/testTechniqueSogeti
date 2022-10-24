import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailsTask from '../components/DetailsTask/DetailsTask';
import Loading from '../components/Loading/Loading';
import { useTasksContext } from '../context/tasks_context';

const DetailsTaskPage = () => {
  const { id } = useParams();
  const { fetchTask, task, loading } = useTasksContext();

  useEffect(() => {
    fetchTask(id);
  }, []);

  if (loading) return <Loading />;
  return <DetailsTask {...task} />;
};

export default DetailsTaskPage;
