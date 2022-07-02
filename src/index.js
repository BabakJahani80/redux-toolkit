import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from './theme';
import { ThemeProvider } from '@mui/styles';

import './style.css'
import { Provider } from 'react-redux';
import { store } from './components/Redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router >
      <Provider store={store}>
        <App />
      </Provider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);