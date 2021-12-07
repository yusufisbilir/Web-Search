import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ResultContextProvider } from './contexts/ResultContextProvider';

ReactDOM.render(
  <ResultContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ResultContextProvider>,
  document.getElementById('root')
);
