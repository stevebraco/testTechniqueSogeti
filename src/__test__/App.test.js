/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import App from '../App';
import { render, screen, fireEvent } from '@testing-library/react';
import { addTask, filterDataCompleted, findTaskId } from '../lib/helpers';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import DetailsTaskPage from '../pages/DetailsTaskPage';
import data from '../data';
import mockedTasks from '../__mocks__/mockData';

describe('When I am on Task Page', () => {
  describe('When a todo is done', () => {
    it('Should be crossed out', async () => {
      // eslint-disable-next-line react/react-in-jsx-scope
      render(<App />);
      const checkbox = screen.getAllByTestId('checkbox-element');
      const task = screen.getAllByTestId('task');
      fireEvent.click(checkbox[0]);

      expect(task[0].classList.contains('beJHPX')).toBe(true);
    });
    it('Should be placed at the bottom of the list', () => {
      const result = filterDataCompleted(mockedTasks.fakeData());

      const expected = [
        {
          id: 2,
          title: 'Regarder les users stories',
          description: 'Je suis une description',
          completed: false,
        },
        {
          id: 3,
          title: 'Regarder les users stories',
          description: 'Je suis une description',
          completed: false,
        },
        {
          id: 1,
          title: 'toto',
          description: 'Je suis une description',
          completed: true,
        },
      ];

      expect(result).toEqual(expected);
    });

    describe('When I would like to add a new todo in my list', () => {
      test('Should created todo has to be on top of the list of todos', async () => {
        const data = mockedTasks.fakeData();
        const newTask = mockedTasks.newTask();

        const result = addTask(data, newTask);
        const expected = [newTask, ...data];
        expect(result).toEqual(expected);
      });
    });
  });
});

describe('When I am on DetailsTask Page', () => {
  it('Should be render the good task via a unique URL', async () => {
    render(
      <MemoryRouter initialEntries={['/2']}>
        <Routes>
          <Route path="/:id" element={<DetailsTaskPage data={data} />} />
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
    };

    expect(result).toEqual(expected);
  });
});
