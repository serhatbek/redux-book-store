import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/styles/index.scss';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './features/store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer position='top-center' autoClose={2000} />
      <App />
    </Provider>
  </React.StrictMode>
);
