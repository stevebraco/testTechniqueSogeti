import React from 'react';
import './App.css';
import Tasks from './pages/Tasks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsTask from './pages/DetailsTask';
import data from './data';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tasks data={data} />} />
        <Route path="/:id" element={<DetailsTask data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
