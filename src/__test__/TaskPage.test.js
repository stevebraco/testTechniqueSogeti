import React fron 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { addTask, deleteTask, filterDataCompleted } from '../lib/helpers';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import mockedTasks from '../__mocks__/mockData';
import TasksPage from '../pages/TasksPage';
import NewTask from '../components/NewTask/NewTask';

describe('When I am on Task Page', () => {
  describe('When a todo is done', () => {
    it('Should be crossed out', async () => {
      const setTasks = jest.fn();
      render(
        <MemoryRouter initialEntries={['/testTechniqueSogeti']}>
          <Routes>
            <Route
              path="/testTechniqueSogeti"
              element={
                <TasksPage tasks={mockedTasks.fakeData()} setTasks={setTasks} />
              }
            />
          </Routes>
        </MemoryRouter>
      );

      const checkbox = screen.getAllByTestId('checkbox-element');
      const task = screen.getAllByTestId('task');

      fireEvent.click(checkbox[0]);

      expect(task[0].className).not.toEqual(task[1].className);
      expect(task[0].className).not.toEqual(task[2].className);
      expect(task[1].className).toEqual(task[2].className);
    });
    it('Should be placed at the bottom of the list', () => {
      const result = filterDataCompleted(mockedTasks.fakeData());

      const expected = [
        {
          id: 3,
          title: 'Regarder les users stories',
          description: 'Je suis une description',
          completed: false,
          date: '2022-05-18T11:58:58.565Z',
        },
        {
          id: 2,
          title: 'Regarder les users stories',
          description: 'Je suis une description',
          completed: false,
          date: '2021-10-18T11:58:58.565Z',
        },

        {
          id: 1,
          title: 'toto',
          description: 'Je suis une description',
          completed: true,
          date: '2022-10-18T11:58:58.565Z',
        },
      ];

      expect(result).toEqual(expected);
    });

    describe('When I would like to add a new todo in my list', () => {
      it('Should created todo has to be on top of the list of todos', async () => {
        const data = mockedTasks.fakeData();
        const newTask = mockedTasks.newTask();

        const result = addTask(data, newTask);
        const expected = [newTask, ...data];
        expect(result).toEqual(expected);
      });
    });

    it('Should be delete a task on the list', () => {
      const result = deleteTask(mockedTasks.fakeData(), 2);
      const expected = mockedTasks.deleteTaskIdTwo();

      expect(result).toEqual(expected);
    });
  });

  describe('When I click on the button Update', () => {
    it('title should be update a task', () => {
      const setTasks = jest.fn();
      render(
        <MemoryRouter initialEntries={['/testTechniqueSogeti']}>
          <Routes>
            <Route
              path="/testTechniqueSogeti"
              element={
                <TasksPage tasks={mockedTasks.fakeData()} setTasks={setTasks} />
              }
            />
          </Routes>
        </MemoryRouter>
      );

      const buttonUpdate = screen.getAllByTestId('update');

      fireEvent.click(buttonUpdate[0]);

      expect(screen.getByText('Update a task')).toBeTruthy();
    });
  });

  describe('When the title is empty', () => {
    let updateTask = jest.fn();
    let handleSubmit = jest.fn();
    it('Should be a message title is required', () => {
      render(
        <NewTask
          error={true}
          handleSubmit={handleSubmit}
          updateTask={updateTask}
        />
      );
      const buttonSave = screen.getByTestId('button');

      fireEvent.submit(buttonSave);

      expect(screen.getByText('Title is required')).toBeTruthy();
    });
  });
});
