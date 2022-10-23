import { filterDataCompleted } from '../lib/helpers';

const tasks_reducer = (state, action) => {
  if (action.type === 'GET_TASKS_BEGIN') {
    return { ...state, tasks_loading: true };
  }
  if (action.type === 'GET_TASKS_SUCCESS') {
    const newTask = filterDataCompleted(action.payload);
    return {
      ...state,
      tasks: newTask,
      loading: false,
    };
  }
  if (action.type === 'GET_TASKS_ERROR') {
    return { ...state, tasks_loading: false, tasks_error: true };
  }

  if (action.type === 'TASK_DELETE_REQUEST') {
    return { ...state, loading: true };
  }

  if (action.type === 'TASK_DELETE_SUCCESS') {
    return { ...state, loading: false, success: true, updateTask: true };
  }

  if (action.type === 'TASK_DELETE_FAIL') {
    return { ...state, error: false };
  }

  if (action.type === 'TASK_DELETE_RESET') {
    return { ...state, success: false };
  }

  if (action.type === 'TASK_UPDATE_RESET') {
    return { ...state, success: false };
  }

  if (action.type === 'TASK_UPDATE_REQUEST') {
    return { ...state, loading: true };
  }
  if (action.type === 'TASK_UPDATE_SUCCESS') {
    return { ...state, success: true, loading: false, editTask: {} };
  }

  if (action.type === 'TASK_SUCCESS') {
    return { ...state, success: false };
  }
  if (action.type === 'EDIT_TASK') {
    return { ...state, editTask: action.payload, isEdit: true };
  }
  if (action.type === 'TASK_CREATE_SUCCESS') {
    return { ...state, success: true };
  }
  if (action.type === 'FETCH_TASK_SUCCESS') {
    console.log(action.payload);
    return { ...state, task: action.payload };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default tasks_reducer;
