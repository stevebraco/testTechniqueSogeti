import styled from 'styled-components';

export const TasksStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ContainerTasksListStyles = styled.div`
  padding: 20px;
  flex: 50%;
`;

export const WrapperTitleStyles = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 25px;
  position: relative;

  span {
    color: gray;
  }
`;
