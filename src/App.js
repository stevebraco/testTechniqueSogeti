import React, { useState } from 'react';
import './App.css';
import TasksPage from './pages/TasksPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsTaskPage from './pages/DetailsTaskPage';
import data from './data';

function App() {
  const [tasks, setTasks] = useState(data);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<TasksPage tasks={tasks} setTasks={setTasks} />}
        />
        <Route path="/:id" element={<DetailsTaskPage data={tasks} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
