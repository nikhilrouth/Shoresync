import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BankAttributesForm from './components/BankAttributesForm';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
      path: "/",
      element: <App/>,
  },
  {
      path: "/BankAttributes",
      element: <BankAttributesForm/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

