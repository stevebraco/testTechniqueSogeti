const mockedTasks = {
  fakeData() {
    return [
      {
        id: 1,
        title: 'toto',
        description: 'Je suis une description',
        completed: true,
      },
      {
        id: 2,
        title: 'Regarder les users stories',
        description: 'Je suis une description',
        completed: false,
      },
      {
        id: 3,
        title: 'Regarder les users stories',
        description: 'Je suis une description',
        completed: false,
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
};

export default mockedTasks;
