import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles
import App from './App.jsx'; // Main application component

// Rendering the App component into the 'root' element of the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <App />
  </React.StrictMode>
);