import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import UnderDevelopment from "./pages/Under_Development";
import ErrorPage from "./pages/Error_Page";

const router = createBrowserRouter([
    {
        path:"/",
        element: <div>Hi!</div>,
        errorElement:<ErrorPage/>
    },
    {
        path: "/elearning",
        element: <App/>,
    },
    {
        path: "/services",
        element: <UnderDevelopment/>
    },
    {
        path: "/design",
        element: <UnderDevelopment/>
    },
    {
        path: "/development",
        element: <UnderDevelopment/>
    },
    {
        path: "/price",
        element: <UnderDevelopment/>
    },
    {
        path: "/packages",
        element: <UnderDevelopment/>
    },
    {
        path: "/contact",
        element: <UnderDevelopment/>
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
