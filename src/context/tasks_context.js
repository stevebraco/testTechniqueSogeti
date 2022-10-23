import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/tasks_reducer';

const initialState = {
  loading: false,
  error: false,
  success: false,
  tasks: [],
  task: null,
  editTask: {},
  isEdit: false,
};

const TasksContext = React.createContext();

export const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchTasks = async () => {
    dispatch({ type: 'GET_TASKS_BEGIN' });
    try {
      const { data } = await axios.get('http://localhost:3000/tasks');
      dispatch({ type: 'GET_TASKS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'GET_TASKS_ERROR' });
    }
  };

  const handleDelete = (id) => async () => {
    console.log('delete');
    dispatch({ type: 'TASK_DELETE_SUCCESS' });

    try {
      const { data } = await axios.delete(`http://localhost:3000/tasks/${id}`);
      dispatch({ type: 'TASK_DELETE_SUCCESS', payload: data });
      dispatch({ type: 'TASK_DELETE_RESET' });
    } catch (error) {
      dispatch({ type: 'TASK_DELETE_FAIL', payload: error.message });
    }
  };

  const handleUpdate = (task) => async () => {
    dispatch({ type: 'EDIT_TASK', payload: task });
  };

  const handleChecked = (task) => async () => {
    dispatch({ type: 'TASK_UPDATE_REQUEST' });
    try {
      task.completed = !task.completed;

      const { data } = await axios.put(
        `http://localhost:3000/tasks/${task.id}`,
        task
      );
      dispatch({ type: 'TASK_UPDATE_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'TASK_UPDATE_FAIL', payload: error.message });
    }
  };

  const resetForm = (name) => {
    name.value = '';
  };

  const handleSubmit = (editTask) => async (e) => {
    e.preventDefault();
    const [title, description] = e.target;
    if (editTask.title) {
      const editNewTask = {
        ...editTask,
        title: title.value,
        description: description.value,
      };

      try {
        const { data } = await axios.put(
          `http://localhost:3000/tasks/${editTask.id}`,
          editNewTask
        );
        dispatch({ type: 'TASK_UPDATE_SUCCESS', payload: data });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('add');
      const newTask = {
        id: Date.now(),
        title: title.value,
        description: description.value,
        completed: false,
        date: new Date().toISOString(),
      };

      // dispatch({ type: 'TASK_CREATE_REQUEST' });
      try {
        const { data } = await axios.post(
          `http://localhost:3000/tasks`,
          newTask
        );
        dispatch({ type: 'TASK_CREATE_SUCCESS', payload: data });
        console.log(data);
      } catch (error) {
        // dispatch({ type: 'TASK_CREATE_REQUEST', action: error });
      }
    }

    e.target.reset();
  };

  const fetchTask = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/tasks/${id}`);
      dispatch({ type: 'FETCH_TASK_SUCCESS', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // useEffect(() => {
  //   if (initialState.updateTask) {
  //     dispatch({ type: 'UPDATE_TASK' });
  //   }
  // }, [initialState.updateTask]);

  const reset = () => {
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
        reset,
        fetchTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
// make sure use
export const useTasksContext = () => {
  return useContext(TasksContext);
};
