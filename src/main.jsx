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
import EstateDetails from "../Components/Estates/EstateDetails";
import PrivateRoutes from "./Routes/PrivateRoutes";
import UpdateProfile from "../Pages/UpdateProfile";
import ErrorElement from "../Pages/ErrorElement";
AOS.init();
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      { path: "/", element: <Home></Home> ,loader:()=>fetch('/data.json') },
      {path:"/:id",element:<PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>,loader:()=>fetch('/data.json')},
      { path: "/register", element: <Register></Register> },
      {
        path:"/login", element:<Login></Login>
      },
      {path:"/update",element:<UpdateProfile></UpdateProfile>}
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
