import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ResultContextProvider } from './context/ResultContextProvider';

ReactDOM.render(
  <ResultContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ResultContextProvider>,
  document.getElementById('root')
);
