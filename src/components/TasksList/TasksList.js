import React, { useState } from 'react';

import Task from '../Task/Task';
import EmptyTask from '../EmptyTask/EmptyTask';

import {
  ContainerTasksListStyles,
  TasksStyles,
  WrapperTitleStyles,
} from './TasksListStyles';
import { useTasksContext } from '../../context/tasks_context';
import Loading from '../Loading/Loading';

const TasksList = () => {
  const { tasks, loading } = useTasksContext();

  return (
    <ContainerTasksListStyles>
      <WrapperTitleStyles>
        <div>
          <h2>Task List</h2>
          <span>You have {tasks.length} tasks</span>
        </div>
        {loading && <Loading />}
      </WrapperTitleStyles>
      <TasksStyles>
        {!tasks.length ? (
          <EmptyTask />
        ) : (
          tasks.map((task) => <Task key={task._id} task={task} />)
        )}
      </TasksStyles>
    </ContainerTasksListStyles>
  );
};

export default TasksList;
