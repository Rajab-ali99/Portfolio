import React from "react";
import App from "../App";
import Home from '../pages/Home.jsx'
import Contact from '../pages/Contact.jsx'
import About from '../pages/About.jsx'
import Projects from '../pages/Projects.jsx'

import {createBrowserRouter} from "react-router-dom";
    const router= createBrowserRouter([
        {
            path:"/",
            element: <App/> ,
            children:[
                {
                    path:"",
                    element: <Home/>
                },
                {
                    path:"about",
                    element: <About/>
                },
                {
                    path:"contact",
                    element: <Contact/>
                },
                {
                    path:"projects",
                    element: <Projects/>
                }

            ]

        }
    ])
    export default router