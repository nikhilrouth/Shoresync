import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from "./components/Login";
import App from './App';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateAccount from './components/CreateAccount';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
      path: "/Login",
      element: <Login/>,
  },
  {
    path: "/CreateAccount",
    element: <CreateAccount/>,
},
  
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

