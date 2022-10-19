import React from 'react';
import PropTypes from 'prop-types';

import {
  ButtonSubmitStyles,
  ContainerNewTaskStyles,
  GroupFormStyles,
  IconPlusStyles,
  InputStyles,
  LabelStyles,
  TextAreaStyles,
} from './NewTaskStyles';

const NewTask = ({ handleSubmit, error }) => {
  return (
    <ContainerNewTaskStyles>
      <h1>Add a new task</h1>
      <form data-testid="form" onSubmit={handleSubmit}>
        <GroupFormStyles>
          <LabelStyles htmlFor="title">Title</LabelStyles>
          <InputStyles
            type="text"
            placeholder="Add a title"
            name="title"
            id="title"
            data-testid="title"
          />
          {error && 'title is required'}
        </GroupFormStyles>
        <GroupFormStyles>
          <LabelStyles htmlFor="description">Description</LabelStyles>
          <TextAreaStyles
            name="description"
            placeholder="Add a description"
            id="description"
            cols="10"
            rows="5"
          ></TextAreaStyles>
        </GroupFormStyles>
        <ButtonSubmitStyles data-testid="button">
          <IconPlusStyles />
          Add New Task
        </ButtonSubmitStyles>
      </form>
    </ContainerNewTaskStyles>
  );
};

export default NewTask;

NewTask.propTypes = {
  handleSubmit: PropTypes.func,
  error: PropTypes.bool,
};
