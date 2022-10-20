import React, { useEffect, useState } from 'react';

import '../App.css';
import styled from 'styled-components';
import NewTask from '../components/NewTask/NewTask';
import TasksList from '../components/TasksList/TasksList';
import { addTask, deleteTask, filterDataCompleted } from '../lib/helpers';

const Container = styled.div`
  display: grid;
  /* grid-template-columns: 400px 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  height: 100%;
`;

function TasksPage({ tasks, setTasks }) {
  const [error, setError] = useState(false);

  const checkIsCompleted = () => {
    const dataFilterCompleted = filterDataCompleted(tasks);
    setTasks(dataFilterCompleted);
  };

  useEffect(() => {
    checkIsCompleted();
  }, []);

  const handleChecked = (index, completed) => () => {
    setTasks((prevState) => {
      const copyState = [...prevState];
      copyState[index].completed = !completed;
      checkIsCompleted();
      return copyState;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const [title, description] = e.target;

    if (!title.value) {
      setError(true);
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      title: title.value,
      description: description.value,
      completed: false,
    };

    const updateTaskList = addTask(tasks, newTask);

    setTasks(updateTaskList);
    setError(false);
    e.target.reset();
  };

  const handleDelete = (id) => () => {
    const taskDelete = deleteTask(tasks, id);
    setTasks(taskDelete);
  };

  return (
    <Container>
      <NewTask error={error} handleSubmit={handleSubmit} />
      <TasksList
        data={tasks}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </Container>
  );
}

export default TasksPage;
