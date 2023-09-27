import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import CSS and JS styles from Bootstrap
import './assets/scss/styles.scss';
import * as bootstrap from 'bootstrap';

// Import all Bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
