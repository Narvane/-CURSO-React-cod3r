import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Calculador from "./main/Calculador";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <h1>Calculator</h1>
    <Calculador />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
