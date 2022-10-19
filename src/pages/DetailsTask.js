/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsTask = ({ data }) => {
  const { id } = useParams();

  const findTask = data.find((task) => task.id === +id);
  const { title, description } = findTask;
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default DetailsTask;
