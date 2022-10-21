import React from 'react';
import PropTypes from 'prop-types';

import {
  ButtonSubmitStyles,
  ContainerNewTaskStyles,
  GroupFormStyles,
  InputStyles,
  LabelStyles,
  TextAreaStyles,
} from './NewTaskStyles';
import MessageError from '../MessageError/MessageError';

const NewTask = ({ handleSubmit, error, updateTask }) => {
  const { isEdit, title, description } = updateTask;
  const isDefaultValue = (value) => (isEdit ? value : '');
  return (
    <ContainerNewTaskStyles>
      {!isEdit ? <h1>Add a new task</h1> : <h1>Update a task</h1>}
      <form data-testid="form" onSubmit={handleSubmit}>
        <GroupFormStyles>
          <LabelStyles htmlFor="title">Title*</LabelStyles>
          <InputStyles
            type="text"
            placeholder="Add a title"
            id="title"
            data-testid="title"
            defaultValue={isDefaultValue(title)}
          />
          {error && <MessageError />}
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

NewTask.propTypes = {
  handleSubmit: PropTypes.func,
  error: PropTypes.bool,
};
