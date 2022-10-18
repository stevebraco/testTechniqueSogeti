import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Tasks = styled.div`
  /* background: blue; */
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Task = styled.div`
  /* background: red; */
  display: flex;
  gap: 15px;
  align-items: center;
  background: #22232f;
  border-radius: 8px;
  padding: 10px;
`;

const ContainerTasksList = styled.div`
  padding: 20px;
`;

const InputCheckbox = styled.input`
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  outline-color: #d87d4a;
  padding: 2rem 2.4rem;
`;

const WrapperTitle = styled.div`
  display: flex;
  align-items: baseline;
  gap: 25px;

  span {
    color: gray;
  }
`;

const TasksList = ({ data }) => {
  if (!data.length) {
    return 'Your TaskList is empty';
  }

  return (
    <ContainerTasksList>
      <WrapperTitle>
        <h2>Task List</h2>
        <span>You have {data.length} tasks</span>
      </WrapperTitle>
      <Tasks>
        {data.map(({ id, title }) => (
          <Task key={id}>
            <InputCheckbox type="checkbox" />
            <p>{title}</p>
          </Task>
        ))}
      </Tasks>
    </ContainerTasksList>
  );
};

export default TasksList;

TasksList.propTypes = {
  data: PropTypes.array,
};
