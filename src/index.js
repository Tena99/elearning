import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import UnderDevelopment from "./pages/Under_Development";
import ErrorPage from "./pages/Error_Page";
import OldDesignContainer from "./pages/Old_Design_Container";
import OldDesignItem from "./pages/Old_Design_Container/Old_Design_Item";
import NewDesign from "./pages/New_Design_Container";
import NewDesignItem from "./pages/New_Design_Container/New_Design_Item";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement:<ErrorPage/>,
    },
    {
        path:"/elearning",
        element: <App/>,
        errorElement:<ErrorPage/>,
    },

    {
      path:"/o",
        element: <OldDesignContainer/>,
        children: [
            {
                path: "",
                element: <NewDesignItem/>
            },
            {
                path: "services",
                element: <UnderDevelopment/>
            },
            {
                path: "design",
                element: <UnderDevelopment/>
            },
            {
                path: "development",
                element: <UnderDevelopment/>
            },
            {
                path: "price",
                element: <UnderDevelopment/>
            },
            {
                path: "packages",
                element: <UnderDevelopment/>
            },
            {
                path: "contact",
                element: <UnderDevelopment/>
            },
            {
                path: "mobile",
                element: <UnderDevelopment/>
            },
            {
                path: "training",
                element: <UnderDevelopment/>
            },
            {
                path: "custom",
                element: <UnderDevelopment/>
            },
            {
                path: "retail",
                element: <UnderDevelopment/>
            },
        ],
    },

    {
        path: "/n",
        element: <NewDesign/>,
        children: [
            {
                path: "",
                element: <NewDesignItem/>
            },
            {
                path: "services",
                element: <UnderDevelopment/>
            },
            {
                path: "design",
                element: <UnderDevelopment/>
            },
            {
                path: "development",
                element: <UnderDevelopment/>
            },
            {
                path: "price",
                element: <UnderDevelopment/>
            },
            {
                path: "packages",
                element: <UnderDevelopment/>
            },
            {
                path: "contact",
                element: <UnderDevelopment/>
            },
            {
                path: "mobile",
                element: <UnderDevelopment/>
            },
            {
                path: "training",
                element: <UnderDevelopment/>
            },
            {
                path: "custom",
                element: <UnderDevelopment/>
            },
            {
                path: "retail",
                element: <UnderDevelopment/>
            },
        ],
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(

        <RouterProvider router={router} />

);
