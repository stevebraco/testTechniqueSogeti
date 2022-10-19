import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const ContainerStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const DetailStyles = styled.div`
  background: #22232f;
  border-radius: 8px;
  padding: 30px;
  width: 800px;
`;

export const WrapperBackStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GoBackStyles = styled(Link)`
  font-size: 13px;
  display: inline-block;
  &:hover {
    text-decoration: underline;
  }
`;

export const IconArrowLeft = styled(AiOutlineArrowLeft)`
  vertical-align: middle;
  margin-right: 5px;
`;

export const StatusCompleted = styled.div`
  color: ${({ completed }) => (completed ? '#6FBA76' : '#f6bc24')};
  background: ${({ completed }) => (completed ? '#6fba762e' : '#f6bb244f')};
  padding: 5px 10px;
  font-size: 13px;
  border-radius: 20px;
`;

export const TitleStyles = styled.h2``;
export const DescriptionStyles = styled.p`
  font-size: 25px;
  font-weight: 300;
`;
