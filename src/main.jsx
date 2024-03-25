import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Home from './components/Home/Home'
import Books from './components/Books/Books'
import Pages from './components/Pages/Pages'
import Registration from './components/Registration/Registration'
import Updates from './components/Updates/Updates'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
    {
      path:'/',
      element: <Home></Home>,
    },
    {
      path: '/books',
      element: <Books></Books>,
    },
    {
      path: '/pages',
      element: <Pages></Pages>,
    },
    {
      path: '/registration',
      element: <Registration></Registration>,
    },
    {
      path: '/updates',
      element: <Updates></Updates>,
    },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
