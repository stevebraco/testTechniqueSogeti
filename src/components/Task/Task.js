import React, { useEffect } from 'react';
import {
  ButtonDeleteStyles,
  ButtonUpdateStyles,
  InputCheckboxStyles,
  TaskStyles,
  TitleStyles,
} from './TaskStyles';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import Date from '../Date/Date';
import { useTasksContext } from '../../context/tasks_context';

const Task = ({ task }) => {
  const { _id, title, completed, date } = task;

  const { handleDelete, success, successTask, handleChecked, handleUpdate } =
    useTasksContext();

  useEffect(() => {
    if (success) {
      successTask();
    }
  }, [success]);

  return (
    <TaskStyles completed={completed}>
      <div>
        <InputCheckboxStyles
          data-testid="checkbox-element"
          type="checkbox"
          defaultChecked={completed}
          onClick={handleChecked(task)}
        />
        <Link to={`/testTechniqueSogeti/${_id}`}>
          <TitleStyles data-testid="task" completed={completed}>
            {title}
          </TitleStyles>
        </Link>
        <Date date={date} />
      </div>
      <div>
        <ButtonDeleteStyles onClick={handleDelete(_id)}>X</ButtonDeleteStyles>
        <ButtonUpdateStyles data-testid="update" onClick={handleUpdate(task)}>
          <BsFillPencilFill />
        </ButtonUpdateStyles>
      </div>
    </TaskStyles>
  );
};

export default Task;
