import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


console.log("Main.jsx running..."); // Check if this log shows up
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);
