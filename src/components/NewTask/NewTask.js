import React, { useEffect } from 'react';
import { useTasksContext } from '../../context/tasks_context';

import MessageError from '../MessageError/MessageError';

import {
  ButtonSubmitStyles,
  ContainerNewTaskStyles,
  GroupFormStyles,
  InputStyles,
  LabelStyles,
  TextAreaStyles,
} from './NewTaskStyles';

const NewTask = () => {
  const { editTask, handleSubmit, success, successTask, message } =
    useTasksContext();

  const isDefaultValue = (value) => (editTask.title ? value : '');

  const { title, description } = editTask;

  useEffect(() => {
    if (success) {
      successTask();
    }
  }, [success]);

  return (
    <ContainerNewTaskStyles>
      {!editTask.title ? <h1>Add a new task</h1> : <h1>Update a task</h1>}
      <form data-testid="form" onSubmit={handleSubmit(editTask)}>
        <GroupFormStyles>
          <LabelStyles htmlFor="title">Title*</LabelStyles>
          <InputStyles
            type="text"
            placeholder="Add a title"
            id="title"
            data-testid="title"
            defaultValue={isDefaultValue(title)}
          />
          {message && <MessageError message={message} />}
        </GroupFormStyles>
        <GroupFormStyles>
          <LabelStyles htmlFor="description">Description</LabelStyles>
          <TextAreaStyles
            name="description"
            placeholder="Add a description"
            id="description"
            defaultValue={isDefaultValue(description)}
          ></TextAreaStyles>
        </GroupFormStyles>
        <ButtonSubmitStyles data-testid="button">Save</ButtonSubmitStyles>
      </form>
    </ContainerNewTaskStyles>
  );
};

export default NewTask;
