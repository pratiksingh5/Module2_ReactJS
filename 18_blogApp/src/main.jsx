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
import CreateBlog from './pages/CreateBlog.jsx';
import EditBlog from './pages/EditBlog.jsx';
import Blog from './pages/Blog.jsx';
import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx';
import { Provider } from "react-redux";
import { store } from './store/store.js';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
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
        path: "/blog/:slug",
        element: <Blog/>
      },
    ]
  },

  {
    path: "*",
    element: <NotFound/>
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
     <RouterProvider router={router} />
     </Provider>
  </React.StrictMode>,
)
