import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Under_Development from "./pages/Under_Development";
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
        element: <Under_Development/>
    },
    {
        path: "/design",
        element: <Under_Development/>
    },
    {
        path: "/development",
        element: <Under_Development/>
    },
    {
        path: "/price",
        element: <Under_Development/>
    },
    {
        path: "/packages",
        element: <Under_Development/>
    },
    {
        path: "/contact",
        element: <Under_Development/>
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
