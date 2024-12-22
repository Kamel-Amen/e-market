//import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'fontawesome';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </BrowserRouter>
);
