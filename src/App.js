import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TasksPage from './pages/TasksPage';
import DetailsTaskPage from './pages/DetailsTaskPage';

import data from './data';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem('tasks')) ?? data
  );

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          exact
          path="/testTechniqueSogeti"
          element={<TasksPage tasks={tasks} setTasks={setTasks} />}
        /> */}
        <Route exact path="/testTechniqueSogeti" element={<TasksPage />} />
        {/* <Route
          path="/testTechniqueSogeti/:id"
          element={<DetailsTaskPage data={tasks} />}
        /> */}
        <Route path="/testTechniqueSogeti/:id" element={<DetailsTaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
