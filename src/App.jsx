// src/App.js
import React from 'react';

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Movie from './pages/Movie';
import ContactUs from './pages/ContactUs';
import Applayout from './components/layout/Applayout';
import ErrorPage from './components/layout/ErrorPage';
import { GetMovieData } from './api/GetApiData';

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Applayout />,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/Home",
          element: <Home />
        },
        {
          path: "/About",
          element: <About />
        },
        {
          path: "/Movie",
          element: <Movie />,
          loader: GetMovieData,
        },
        {
          path: "/ContactUs",
          element: <ContactUs />
        }
      ]
    }

  ])



  return (
    <RouterProvider router={router} />
  );
}

export default App;
