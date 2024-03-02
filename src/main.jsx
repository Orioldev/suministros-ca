import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SuministrosApp } from './SuministrosApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SuministrosApp />
    </BrowserRouter>
  </React.StrictMode>,
)
