import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import About from "../pages/About/About.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Portfolio from "../pages/Portfolio/Portfolio.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import { Component } from "react";
import RootLayout from "../layout/RootLayout.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "/contact",
                Component: Contact
            },
            {
                path: "/portfolio",
                Component: Portfolio
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    },
]);