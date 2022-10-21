/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ContainerTasksListStyles,
  TasksStyles,
  WrapperTitleStyles,
} from './TasksListStyles';
import Task from '../Task/Task';
import EmptyTask from '../EmptyTask/EmptyTask';
import ButtonFilter from '../ButtonFilter/ButtonFilter';
import { selectFilter } from '../../lib/helpers';

const TasksList = ({ data, handleTask }) => {
  const [filter, setFilter] = useState('All');
  const handleFilter = (button) => () => {
    setFilter(button);
  };

  if (!data.length) {
    return <EmptyTask />;
  }

  return (
    <ContainerTasksListStyles>
      <WrapperTitleStyles>
        <h2>Task List</h2>
        <span>You have {data.length} tasks</span>
      </WrapperTitleStyles>
      <ButtonFilter handleFilter={handleFilter} filter={filter} />
      <TasksStyles>
        {data
          .filter((task) => {
            const filterSelect = selectFilter(task);
            return filterSelect[filter];
          })
          .map((task, index) => (
            <Task
              key={task.id}
              task={task}
              index={index}
              handleTask={handleTask}
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
