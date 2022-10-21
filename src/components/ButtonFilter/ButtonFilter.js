import React from 'react';
import { ContainerButton, ButtonStyles } from './ButtonFilterStyles';

const ButtonFilter = ({ handleFilter, filter }) => {
  const buttons = ['All', 'InProgress'];

  return (
    <ContainerButton>
      {buttons.map((button) => {
        const isFilter = button === filter ? 1 : 0;
        return (
          <ButtonStyles
            onClick={handleFilter(button)}
            filter={isFilter}
            key={button}
          >
            {button}
          </ButtonStyles>
        );
      })}
    </ContainerButton>
  );
};

export default ButtonFilter;
