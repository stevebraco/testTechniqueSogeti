import { filterDataCompleted } from '../lib/helpers';

const tasks_reducer = (state, action) => {
  if (action.type === 'TASKS_LOADING') {
    return { ...state, loading: true };
  }

  if (action.type === 'TASKS_ERROR') {
    return { ...state, loading: false, error: true };
  }

  // fetcn taks
  if (action.type === 'FETCH_TASKS_SUCCESS') {
    const newTask = filterDataCompleted(action.payload);
    return {
      ...state,
      tasks: newTask,
      filterTasks: newTask,
      loading: false,
    };
  }

  //delete
  if (action.type === 'DELETE_TASK_SUCCESS') {
    return { ...state, loading: false, success: true, updateTask: true };
  }

  //Checked
  if (action.type === 'CHECKED_TASK_SUCCESS') {
    return { ...state, success: true, loading: false, editTask: {} };
  }

  //Update Task
  if (action.type === 'UPDATE_TASK_SUCCESS') {
    return { ...state, loading: false, success: true, editTask: {} };
  }

  // Add Task
  if (action.type === 'CREATE_TASK_SUCCESS') {
    return { ...state, loading: false, success: true };
  }

  // fetch one task
  if (action.type === 'FETCH_TASK_SUCCESS') {
    return { ...state, task: action.payload };
  }

  if (action.type === 'MESSAGE_TASKS_ERROR') {
    return { ...state, message: action.payload };
  }
  if (action.type === 'MESSAGE_TASKS_EMPTY') {
    return { ...state, message: '' };
  }

  if (action.type === 'TASK_SUCCESS') {
    return { ...state, success: false };
  }
  if (action.type === 'EDIT_TASK') {
    return { ...state, editTask: action.payload, isEdit: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default tasks_reducer;
