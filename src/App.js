import React from 'react';
import data from './data';
import './App.css';
import styled from 'styled-components';
import NewTask from './components/NewTask';
import TasksList from './components/TasksList';

const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <NewTask />
      <TasksList data={data} />
    </Container>
  );
}

export default App;
