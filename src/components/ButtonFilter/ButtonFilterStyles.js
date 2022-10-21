import styled from 'styled-components';
export const ContainerButton = styled.div`
  padding: 10px 0;
`;
export const ButtonStyles = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: gray;
  font-weight: 600;
  font-size: 16px;
  border-bottom: ${(props) => props.filter && '5px solid #f6bc24'};
  margin: 0 5px;
  color: ${(props) => (props.filter ? '#ffffff' : 'gray')};
  transition: color 0.5s;

  &:hover {
    color: white;
  }
`;
