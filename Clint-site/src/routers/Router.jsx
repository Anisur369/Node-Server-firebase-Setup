import {createBrowserRouter} from "react-router";
import RootLayout from "../layout/RootLayout.jsx";
import Home from "../pages/home/Home.jsx";
// import About from "../pages/About/About.jsx";
// import Contact from "../pages/Contact/Contact.jsx";
// import Portfolio from "../pages/Portfolio/Portfolio.jsx";
// import NotFound from "../pages/NotFound/NotFound.jsx";
// import { Component } from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                path: "/",
                index: true,
                Component: Home
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    },
]);