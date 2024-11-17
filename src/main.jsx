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
import Auth from './Layouts/Auth';
import Login from './Components/Auth/Login';
import Registrar from './Components/Auth/Registrar';
import AuthProvider from './Components/provider/AuthProvider';
import ErrorPage from './Components/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '',
        element: <Navigate to={`/category/01`}></Navigate>
      },
      {
        path: "/category/:id",
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        element: <News />,
      },
    ]
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: '/auth',
        element: <Login />
      },
      {
        path: '/auth/signin',
        element: <Registrar />
      }
    ]
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
