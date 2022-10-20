import React from 'react';
import {
  ButtonDeleteStyles,
  InputCheckboxStyles,
  TaskStyles,
  TitleStyles,
} from './TaskStyles';
import { Link } from 'react-router-dom';

const Task = ({ id, title, completed, index, handleChecked, handleDelete }) => {
  return (
    <TaskStyles completed={completed} data-testid="task">
      <div>
        <InputCheckboxStyles
          data-testid="checkbox-element"
          type="checkbox"
          defaultChecked={completed}
          onClick={handleChecked(index, completed)}
        />
        <Link to={`/${id}`}>
          <TitleStyles completed={completed}>{title}</TitleStyles>
        </Link>
      </div>
      <ButtonDeleteStyles onClick={handleDelete(id)}>X</ButtonDeleteStyles>
    </TaskStyles>
  );
};

export default Task;
