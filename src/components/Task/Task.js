import React from 'react';
import { InputCheckboxStyles, TaskStyles, TitleStyles } from './TaskStyles';
import { Link } from 'react-router-dom';

const Task = ({ id, title, completed, index, handleChecked }) => {
  return (
    <TaskStyles completed={completed} data-testid="task">
      <InputCheckboxStyles
        data-testid="checkbox-element"
        type="checkbox"
        defaultChecked={completed}
        onClick={handleChecked(index, completed)}
      />
      <Link to={`/${id}`}>
        <TitleStyles>{title}</TitleStyles>
      </Link>
    </TaskStyles>
  );
};

export default Task;
