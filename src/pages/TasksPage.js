import React from 'react';
import styled from 'styled-components';

import NewTask from '../components/NewTask/NewTask';
import TasksList from '../components/TasksList/TasksList';

const Container = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: 1045px) {
    flex-direction: column;
  }
`;

function TasksPage() {
  return (
    <Container>
      <NewTask />
      <TasksList />
    </Container>
  );
}

export default TasksPage;
