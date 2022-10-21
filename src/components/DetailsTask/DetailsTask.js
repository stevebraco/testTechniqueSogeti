import React from 'react';
import Date from '../Date/Date';
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

const DetailsTask = ({ title, description, completed, date }) => {
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
        <Date date={date} />
      </DetailStyles>
    </ContainerStyles>
  );
};

export default DetailsTask;
