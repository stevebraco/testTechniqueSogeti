/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { findTaskId } from '../lib/helpers';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import DetailsTaskPage from '../pages/DetailsTaskPage';
import mockedTasks from '../__mocks__/mockData';

describe('When I am on DetailsTask Page', () => {
  it('Should be render the good task via a unique URL', async () => {
    render(
      <MemoryRouter initialEntries={['/testTechniqueSogeti/2']}>
        <Routes>
          <Route
            path="/testTechniqueSogeti/:id"
            element={<DetailsTaskPage data={mockedTasks.fakeData()} />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Je suis une description')).toBeTruthy();
  });

  it('Should find the good task', async () => {
    const data = mockedTasks.fakeData();
    const result = findTaskId(data, 2);

    const expected = {
      id: 2,
      title: 'Regarder les users stories',
      description: 'Je suis une description',
      completed: false,
      date: '2021-10-18T11:58:58.565Z',
    };

    expect(result).toEqual(expected);
  });
});
