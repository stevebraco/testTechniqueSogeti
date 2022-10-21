import React from 'react';
import {
  ContainerStyles,
  DescriptionStyles,
  DetailStyles,
  GoBackStyles,
  IconArrowLeft,
  StatusCompleted,
  TitleStyles,
  WrapperBackStyles,
} from './DetailsTaskStyles';

const DetailsTask = ({ title, description, completed }) => {
  console.log(completed);
  return (
    <ContainerStyles>
      <DetailStyles>
        <WrapperBackStyles>
          <GoBackStyles to="/testTechniqueSogeti">
            <IconArrowLeft />
            Go Back
          </GoBackStyles>
          <StatusCompleted completed={completed}>
            {completed ? 'Done' : 'InProgress'}
          </StatusCompleted>
        </WrapperBackStyles>
        <TitleStyles>{title}</TitleStyles>
        <DescriptionStyles>{description}</DescriptionStyles>
      </DetailStyles>
    </ContainerStyles>
  );
};

export default DetailsTask;
