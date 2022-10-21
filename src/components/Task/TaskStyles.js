import styled from 'styled-components';

export const InputCheckboxStyles = styled.input`
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  outline-color: #d87d4a;
  padding: 2rem 2.4rem;
  display: inline-block;
  margin-right: 15px;
`;

export const TaskStyles = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  background: ${({ completed }) => (completed ? '#2c2d30' : '#22232f')};
  border-radius: 8px;
  padding: 10px 25px 10px;
  transition: 0.5s;
`;

export const TitleStyles = styled.h2`
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: ${({ completed }) => completed && 'line-through'};
  display: inline-block;
  @media (max-width: 375px) {
    font-size: 10px;
  }
`;

export const ButtonDeleteStyles = styled.button`
  border: none;
  background: #e74c3c52;
  color: #e74c3c;
  border-radius: 5px;
  padding: 4px 8px;
  cursor: pointer;
  margin-right: 10px;
`;

export const ButtonUpdateStyles = styled.button`
  border: none;
  color: #6fba76;
  background: #6fba762e;
  border-radius: 5px;
  padding: 4px 6px;
  cursor: pointer;
`;
