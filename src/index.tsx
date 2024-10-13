import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Ensure './App' exists
import reportWebVitals from './reportWebVitals';  // Ensure './reportWebVitals' exists

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Call reportWebVitals (optional)
reportWebVitals();