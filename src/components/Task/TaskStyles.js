import styled from 'styled-components';

export const InputCheckboxStyles = styled.input`
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  outline-color: #d87d4a;
  padding: 2rem 2.4rem;
`;

export const TaskStyles = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  background: ${({ completed }) => (completed ? '#2c2d30' : '#22232f')};
  border-radius: 8px;
  padding: 10px;
  text-decoration-line: ${({ completed }) => completed && 'line-through'};
  transition: 0.5s;
`;

export const TitleStyles = styled.h2`
  font-size: 16px;
  font-weight: 500;
`;
