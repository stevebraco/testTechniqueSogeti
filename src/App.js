import React, { useState } from 'react';
import data from './data';
import './App.css';
import styled from 'styled-components';
import NewTask from './components/NewTask';
import TasksList from './components/TasksList';

const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

function App() {
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState(data);

  return (
    <Container>
      <NewTask />
      <TasksList data={tasks} />
    </Container>
  );
}

export default App;
