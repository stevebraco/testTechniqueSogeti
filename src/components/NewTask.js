import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

const GroupForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
const ContainerNewTask = styled.div`
  padding: 20px;
  border-right: 2px solid #22232f;
`;

const Label = styled.label`
  font-weight: bold;
  padding-bottom: 8px;
`;

const Input = styled.input`
  background: #22232f;
  color: white;
  border: none;
  outline: none;
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  border-radius: 8px;
`;

const TextArea = styled.textarea`
  background: #22232f;
  color: white;
  border: none;
  outline: none;
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  resize: none;
  border-radius: 8px;
`;

const ButtonSubmit = styled.button`
  background: #f6bc24;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 25px;
  font-weight: bold;
  cursor: pointer;
`;

const IconPlus = styled(AiOutlinePlus)`
  font-weight: bolder;
  margin-right: 3px;
`;

// eslint-disable-next-line react/prop-types
const NewTask = () => {
  // eslint-disable-next-line react/prop-types
  return (
    <ContainerNewTask>
      <h1>Add a new task</h1>
      <form>
        <GroupForm>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            placeholder="Add a title"
            name="title"
            id="title"
          />
        </GroupForm>
        <GroupForm>
          <Label htmlFor="description">Description</Label>
          <TextArea
            name="description"
            placeholder="Add a description"
            id="description"
            cols="10"
            rows="5"
          ></TextArea>
        </GroupForm>
        <ButtonSubmit>
          <IconPlus />
          Add New Task
        </ButtonSubmit>
      </form>
    </ContainerNewTask>
  );
};

export default NewTask;
