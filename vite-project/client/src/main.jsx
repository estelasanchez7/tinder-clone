import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./routes/Dashboard";
import Home from "./routes/Home"
import OnBoarding from "./routes/Onboarding";
//import Root from "./routes/Root";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {useCookies} from 'react-cookie'

const Main = () => {

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Home />,
    //element: <Root />,
  },
 
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  
  {
    path: "/onboarding",
    element: <OnBoarding />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

}

export default Main