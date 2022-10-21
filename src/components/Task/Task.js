import React from 'react';
import {
  ButtonDeleteStyles,
  ButtonUpdateStyles,
  InputCheckboxStyles,
  TaskStyles,
  TitleStyles,
} from './TaskStyles';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';

const Task = ({ task, index, handleTask }) => {
  const { handleChecked, handleDelete, handleUpdate } = handleTask();
  const { id, title, completed } = task;
  return (
    <TaskStyles completed={completed}>
      <div>
        <InputCheckboxStyles
          data-testid="checkbox-element"
          type="checkbox"
          defaultChecked={completed}
          onClick={handleChecked(index, completed)}
        />
        <Link to={`/testTechniqueSogeti/${id}`}>
          <TitleStyles data-testid="task" completed={completed}>
            {title}
          </TitleStyles>
        </Link>
      </div>
      <div>
        <ButtonDeleteStyles onClick={handleDelete(id)}>X</ButtonDeleteStyles>
        <ButtonUpdateStyles onClick={handleUpdate(task, index)}>
          <BsFillPencilFill />
        </ButtonUpdateStyles>
      </div>
    </TaskStyles>
  );
};

export default Task;
