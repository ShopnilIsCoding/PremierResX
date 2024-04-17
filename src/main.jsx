import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Login from "../Pages/Login";
import AuthProvider from "./Providers/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { path: "/", element: <Home></Home> ,loader:()=>fetch('/data.json') },
      { path: "/register", element: <Register></Register> },
      {
        path:"/login", element:<Login></Login>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
