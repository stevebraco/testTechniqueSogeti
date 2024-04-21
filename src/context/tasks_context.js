import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/tasks_reducer';

const initialState = {
  loading: false,
  error: false,
  success: false,
  tasks: [],
  task: null,
  editTask: {},
  message: '',
};

const url = 'https://sogebacktodoapp.onrender.com/api/tasks';

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchTasks = async () => {
    dispatch({ type: 'TASKS_LOADING' });
    try {
      const { data } = await axios.get(url);
      dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'TASKS_ERROR' });
    }
  };

  const handleDelete = (id) => async () => {
    dispatch({ type: 'TASKS_LOADING' });

    try {
      const { data } = await axios.delete(
        `https://todoappbackone.herokuapp.com/api/tasks/${id}`
      );
      dispatch({ type: 'DELETE_TASK_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'TASKS_ERROR', payload: error.message });
    }
  };

  const handleUpdate = (task) => async () => {
    dispatch({ type: 'EDIT_TASK', payload: task });
  };

  const handleChecked = (task) => async () => {
    const { _id } = task;
    dispatch({ type: 'TASKS_LOADING' });
    try {
      task.completed = !task.completed;

      const { data } = await axios.put(`${url}/${_id}`, task);

      dispatch({ type: 'CHECKED_TASK_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'TASKS_ERROR', payload: error.message });
    }
  };

  const handleSubmit = (editTask) => async (e) => {
    const { _id } = editTask;

    e.preventDefault();
    const [title, description] = e.target;

    // title is empty
    if (!title.value) {
      dispatch({ type: 'MESSAGE_TASKS_ERROR', payload: 'Title is required' });
      return;
    }

    // edit Task
    if (editTask.title) {
      const editNewTask = {
        ...editTask,
        title: title.value,
        description: description.value,
        date: new Date().toISOString(),
      };

      dispatch({ type: 'TASKS_LOADING' });

      try {
        const { data } = await axios.put(`${url}/${_id}`, editNewTask);
        dispatch({ type: 'UPDATE_TASK_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'TASKS_ERROR', payload: error });
      }
    } else {
      // Add new task
      const newTask = {
        title: title.value,
        description: description.value,
        completed: false,
        date: new Date().toISOString(),
      };

      dispatch({ type: 'TASKS_LOADING' });
      try {
        const { data } = await axios.post(url, newTask);
        dispatch({ type: 'CREATE_TASK_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'TASKS_ERROR', action: error });
      }
    }
    dispatch({ type: 'MESSAGE_TASKS_EMPTY' });

    e.target.reset();
  };

  const fetchTask = async (id) => {
    dispatch({ type: 'TASKS_LOADING' });

    try {
      const { data } = await axios.get(`${url}/${id}`);
      dispatch({ type: 'FETCH_TASK_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'TASKS_ERROR', action: error });
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const successTask = () => {
    dispatch({ type: 'TASK_SUCCESS' });
    fetchTasks();
  };

  return (
    <TasksContext.Provider
      value={{
        ...state,
        handleSubmit,
        handleDelete,
        handleChecked,
        handleUpdate,
        successTask,
        fetchTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => {
  return useContext(TasksContext);
};
