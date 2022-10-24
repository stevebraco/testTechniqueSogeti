import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TasksPage from './pages/TasksPage';
import DetailsTaskPage from './pages/DetailsTaskPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/testTechniqueSogeti" element={<TasksPage />} />
        <Route path="/testTechniqueSogeti/:id" element={<DetailsTaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
