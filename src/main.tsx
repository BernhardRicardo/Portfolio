import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BASE_PATH } from './constants.ts';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={BASE_PATH}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
