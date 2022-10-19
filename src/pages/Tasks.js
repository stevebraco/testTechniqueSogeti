import React, { useEffect, useState } from 'react';
import '../App.css';
import styled from 'styled-components';
import NewTask from '../components/NewTask';
import TasksList from '../components/TasksList';

const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

// eslint-disable-next-line react/prop-types
function Tasks({ tasks, setTasks }) {
  // eslint-disable-next-line no-unused-vars
  // const [tasks, setTasks] = useState(data);
  const [error, setError] = useState(false);

  const checkIsCompleted = () => {
    // eslint-disable-next-line react/prop-types
    const taskDone = tasks.filter(({ completed }) => completed);
    // eslint-disable-next-line react/prop-types
    const notTaskDone = tasks.filter(({ completed }) => !completed);
    setTasks([...notTaskDone, ...taskDone]);
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
      // eslint-disable-next-line react/prop-types
      id: tasks.length + 1,
      title: title.value,
      description: description.value,
      completed: false,
    };
    setTasks((prevState) => [newTask, ...prevState]);
    setError(false);
    e.target.reset();
  };

  return (
    <Container>
      <NewTask error={error} handleSubmit={handleSubmit} />
      <TasksList data={tasks} handleChecked={handleChecked} />
    </Container>
  );
}

export default Tasks;
