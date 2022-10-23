import React, { useState } from 'react';

import Task from '../Task/Task';
import EmptyTask from '../EmptyTask/EmptyTask';
import ButtonFilter from '../ButtonFilter/ButtonFilter';
import { selectFilter } from '../../lib/helpers';

import {
  ContainerTasksListStyles,
  TasksStyles,
  WrapperTitleStyles,
} from './TasksListStyles';
import { useTasksContext } from '../../context/tasks_context';

const TasksList = ({ data, handleTask }) => {
  const [filter, setFilter] = useState('All');
  const handleFilter = (button) => () => {
    setFilter(button);
  };

  const { tasks } = useTasksContext();
  console.log(tasks);

  // if (!data.length) {
  //   return <EmptyTask />;
  // }

  return (
    <ContainerTasksListStyles>
      {/* <WrapperTitleStyles>
        <h2>Task List</h2>
        <span>You have {data.length} tasks</span>
      </WrapperTitleStyles>
      <ButtonFilter handleFilter={handleFilter} filter={filter} /> */}
      <TasksStyles>
        {tasks
          // .filter((task) => {
          //   const filterSelect = selectFilter(task);
          //   return filterSelect[filter];
          // })
          .map((task, index) => (
            <Task
              key={task.id}
              task={task}
              index={index}
              // handleTask={handleTask}
            />
          ))}
      </TasksStyles>
    </ContainerTasksListStyles>
  );
};

export default TasksList;
