import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { routes } from "../src/routes"
import { store } from './store'
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </Provider>
);