import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { store } from './store/index.js';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import MainLayout from './components/MainLayout'
import{createBrowserRouter,RouterProvider} from 'react-router-dom';
import Users from './components/Users';
import User from './components/User.jsx';
import CreateUserForm from './components/CreateUserForm';
import EditUserForm from './components/ٍEditUserForm';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout/>
    ),
    children:[{
      path: "/",
      element: (
          <App /> 
      )
    },
    {
      path: "/users",
      element: (
          <Users />
      )
    },
    {
      path: "users/create-user",
      element: (
          <CreateUserForm/>
      )
    },
    {
      path: "users/:userId",
      element: (
          <User />
      )
    },
    {
      path: "editUser/:userId",
      element: (
          <EditUserForm />
      )
    }
  ]
  }

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App/>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
