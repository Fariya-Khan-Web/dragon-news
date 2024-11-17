import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './Layouts/Home';
import News from './Components/MainComponents/News';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
        path:'',
        element: <Navigate to={`/category/01`}></Navigate>
      },
      {
        path: "/category/:id",
        loader:({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        element: <News/>,
      },
    ]
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
