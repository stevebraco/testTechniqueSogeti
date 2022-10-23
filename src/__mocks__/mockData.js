const mockedTasks = {
  fakeData() {
    return [
      {
        id: 1,
        title: 'toto',
        description: 'Je suis une description',
        completed: true,
        date: '2022-10-18T11:58:58.565Z',
      },
      {
        id: 2,
        title: 'Regarder les users stories',
        description: 'Je suis une description',
        completed: false,
        date: '2021-10-18T11:58:58.565Z',
      },
      {
        id: 3,
        title: 'Regarder les users stories',
        description: 'Je suis une description',
        completed: false,
        date: '2022-05-18T11:58:58.565Z',
      },
    ];
  },
  newTask() {
    return {
      id: 4,
      title: 'coucou',
      description: '',
      completed: false,
    };
  },
  deleteTaskIdTwo() {
    return [
      {
        id: 1,
        title: 'toto',
        description: 'Je suis une description',
        completed: true,
        date: '2022-10-18T11:58:58.565Z',
      },
      {
        id: 3,
        title: 'Regarder les users stories',
        description: 'Je suis une description',
        completed: false,
        date: '2022-05-18T11:58:58.565Z',
      },
    ];
  },
};

export default mockedTasks;
