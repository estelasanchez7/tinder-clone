import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from "./routes/Dashboard"
import Home from "./routes/Home"
import OnBoarding from "./routes/Onboarding"
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
    children: [
      {
        path: "contacts/:contactId",
        element: <Dashboard />,
        
      },
      {
        path: "contacts/:contactId/edit",
        element: <OnBoarding />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


