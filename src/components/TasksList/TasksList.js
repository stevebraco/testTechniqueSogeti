import React from 'react';
import PropTypes from 'prop-types';
import {
  ContainerTasksListStyles,
  TasksStyles,
  WrapperTitleStyles,
} from './TasksListStyles';
import Task from '../Task/Task';
import EmptyTask from '../EmptyTask/EmptyTask';

const TasksList = ({ data, handleChecked, handleDelete }) => {
  if (!data.length) {
    return <EmptyTask />;
  }

  return (
    <ContainerTasksListStyles>
      <WrapperTitleStyles>
        <h2>Task List</h2>
        <span>You have {data.length} tasks</span>
      </WrapperTitleStyles>
      <TasksStyles>
        {data.map((item, index) => (
          <Task
            key={item.id}
            {...item}
            index={index}
            handleChecked={handleChecked}
            handleDelete={handleDelete}
          />
        ))}
      </TasksStyles>
    </ContainerTasksListStyles>
  );
};

export default TasksList;

TasksList.propTypes = {
  data: PropTypes.array,
  handleChecked: PropTypes.func,
};
