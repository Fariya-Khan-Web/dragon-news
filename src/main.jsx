import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Layouts/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
