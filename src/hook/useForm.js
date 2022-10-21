import { useState } from 'react';
import { addTask, deleteTask, filterDataCompleted } from '../lib/helpers';

export default function useForm(tasks, setTasks) {
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false);
  const [updateTask, setUpdateTask] = useState({
    isEdit: false,
    title: '',
    description: '',
  });

  const handleChecked = (index, completed) => () => {
    setTasks((prevState) => {
      const copyState = [...prevState];
      copyState[index].completed = !completed;
      const dataFilterCompleted = filterDataCompleted(copyState);

      return dataFilterCompleted;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const [title, description] = e.target;

    if (!updateTask.isEdit) {
      if (!title.value) {
        setError(true);
        return;
      }

      const newTask = {
        id: tasks.length + 1,
        title: title.value,
        description: description.value,
        completed: false,
      };

      const updateTaskList = addTask(tasks, newTask);

      setTasks(updateTaskList);
    } else {
      setTasks((prevState) => {
        let copyState = prevState;
        copyState[updateTask.index] = {
          ...copyState[updateTask.index],
          title: title.value,
          description: description.value,
        };

        return copyState;
      });
      setUpdateTask({});
    }

    setError(false);
    e.target.reset();
  };

  const handleDelete = (id) => () => {
    const taskDelete = deleteTask(tasks, id);
    setTasks(taskDelete);
  };

  const handleUpdate = (task, index) => () => {
    setUpdateTask({ ...updateTask, ...task, isEdit: true, index });
  };

  const handleTask = () => {
    return {
      handleUpdate,
      handleDelete,
      handleChecked,
    };
  };

  const checkIsCompleted = () => {
    const dataFilterCompleted = filterDataCompleted(tasks);
    setTasks(dataFilterCompleted);
  };

  return {
    handleSubmit,
    error,
    updateTask,
    setUpdateTask,
    checkIsCompleted,
    handleTask,
  };
}
