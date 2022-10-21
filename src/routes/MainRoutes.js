import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Home from '../components/Carousel/Home/Home';
import Contact from '../components/Contact/Contact';
import Destination from '../components/Destination/Destination';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/destination",
        element: <Destination></Destination>
    },
    {
        path: "/blog",
        element: <Blog></Blog>
    },
    {
        path: "/contact",
        element: <Contact></Contact>
    }
]);


export default router;