/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import '../App.css';
import styled from 'styled-components';
import NewTask from '../components/NewTask/NewTask';
import TasksList from '../components/TasksList/TasksList';
import { filterDataCompleted } from '../lib/helpers';
import useForm from '../hook/useForm';

const Container = styled.div`
  display: grid;
  /* grid-template-columns: 400px 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  height: 100%;
`;

function TasksPage({ tasks, setTasks }) {
  const { error, updateTask, handleSubmit, checkIsCompleted, handleTask } =
    useForm(tasks, setTasks);

  useEffect(() => {
    checkIsCompleted();
  }, []);

  return (
    <Container>
      <NewTask
        error={error}
        handleSubmit={handleSubmit}
        updateTask={updateTask}
      />
      <TasksList
        data={tasks}
        handleTask={handleTask}
        // handleFilter={handleFilter}
      />
    </Container>
  );
}

export default TasksPage;
