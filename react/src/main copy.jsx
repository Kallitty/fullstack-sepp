import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Exam from './Exam.jsx'

import './index.css'
import Library from './containers/library/Library.jsx'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { Whatsepp } from './containers/index.js'
import { Login } from './containers/index.js'
import { Signup } from './containers/index.js'
import { Board } from './containers/index.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/library',
    element: <Library />,
  },
  {
    path: '/wsepp',
    element: <Whatsepp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/board',
    element: <Board />,
  },
  {
    path: '/exam/1',
    element: <Exam />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
