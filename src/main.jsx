import React from 'react'
import ReactDOM from 'react-dom/client'
import Project2 from './Project-2'
import Project3 from './Project-3'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <h1>Home</h1> },
  {
    path: '/project-2',
    element: <Project2 />
  },
  {
    path: '/project-3',
    element: <Project3 />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
