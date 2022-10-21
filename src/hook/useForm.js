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
      return filterDataCompleted(copyState);
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

      setTasks(addTask(tasks, newTask));
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
    setTasks(deleteTask(tasks, id));
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
    // const dataFilterCompleted = filterDataCompleted(tasks);
    setTasks(filterDataCompleted(tasks));
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
