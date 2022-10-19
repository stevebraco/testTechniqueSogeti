export const filterDataCompleted = (array) => {
  const taskDone = array.filter(({ completed }) => completed);
  const notTaskDone = array.filter(({ completed }) => !completed);
  return [...notTaskDone, ...taskDone];
};

export const addTask = (list, item) => [item, ...list];

export const findTaskId = (array, id) => {
  return array.find((task) => task.id === +id);
};
