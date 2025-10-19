import {  StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Components/Layout/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import AuthProvider from "./context/AuthContext/AuthProvider.jsx";
import Orders from "./Components/Orders/Orders.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";

// export const AuthContext = createContext(null)
// const userInfo = {
//   email:'abcd@gmail.com'
// }

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: '/orders',
        element: <PrivateRoute>
          <Orders></Orders>
        </PrivateRoute> 
      },
      {
        path:'/profile',
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute>\
          <Dashboard></Dashboard>
        </PrivateRoute>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
   
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    
  </StrictMode>
);
