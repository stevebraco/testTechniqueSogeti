export const filterDataCompleted = (array) => {
  const taskDone = array.filter(({ completed }) => completed);
  const notTaskDone = array.filter(({ completed }) => !completed);
  return [...notTaskDone, ...taskDone];
};

export const addTask = (list, item) => [item, ...list];

export const findTaskId = (array, id) => array.find((task) => task.id === +id);

export const deleteTask = (array, id) =>
  array.filter((task) => task.id !== +id);

export const selectFilter = (task) => {
  return {
    All: task,
    InProgress: !task.completed,
  };
};
