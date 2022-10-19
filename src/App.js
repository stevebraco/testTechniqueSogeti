import React, { useState } from 'react';
import './App.css';
import Tasks from './pages/Tasks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsTask from './pages/DetailsTask';
import data from './data';

function App() {
  const [tasks, setTasks] = useState(data);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tasks tasks={tasks} setTasks={setTasks} />} />
        <Route path="/:id" element={<DetailsTask data={tasks} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
