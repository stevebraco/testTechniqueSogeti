import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

export const GroupFormStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
export const ContainerNewTaskStyles = styled.div`
  padding: 20px;
  border-right: 2px solid #22232f;
  flex: 50%;
`;

export const LabelStyles = styled.label`
  font-weight: bold;
  padding-bottom: 8px;
`;

export const InputStyles = styled.input`
  background: #22232f;
  color: white;
  border: none;
  outline: none;
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  border-radius: 8px;
`;

export const TextAreaStyles = styled.textarea`
  background: #22232f;
  color: white;
  border: none;
  outline: none;
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  resize: none;
  border-radius: 8px;
  height: 100px;
`;

export const ButtonSubmitStyles = styled.button`
  background: #f6bc24;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 25px;
  font-weight: bold;
  cursor: pointer;
`;

export const IconPlusStyles = styled(AiOutlinePlus)`
  font-weight: bolder;
  margin-right: 3px;
`;
