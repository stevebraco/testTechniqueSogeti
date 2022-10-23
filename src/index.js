import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TasksProvider } from './context/tasks_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TasksProvider>
    <App />
  </TasksProvider>
);
