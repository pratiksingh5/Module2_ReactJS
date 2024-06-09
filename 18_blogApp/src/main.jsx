import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import AllBlogs from './pages/AllBlogs.jsx';
import CreateBlog from './pages/CreateBlog.jsx';
import EditBlog from './pages/EditBlog.jsx';
import Blog from './pages/Blog.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <AllBlogs/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signup",
        element: <SignUp/>
      },
      {
        path: "/create-blog",
        element: <CreateBlog/>
      },
      {
        path: "/edit-blog",
        element: <EditBlog/>
      },
      {
        path: "/blog",
        element: <Blog/>
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
