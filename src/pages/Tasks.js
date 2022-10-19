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
function Tasks({ data }) {
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState(data);

  const checkIsCompleted = () => {
    const taskDone = tasks.filter(({ completed }) => completed);
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

  return (
    <Container>
      <NewTask />
      <TasksList data={tasks} handleChecked={handleChecked} />
    </Container>
  );
}

export default Tasks;
