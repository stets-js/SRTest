// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';

const root = document.getElementById('root');
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(rootElement);




