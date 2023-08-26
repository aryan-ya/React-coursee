


import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement : <Error />,
      children :[
    {
      path: "./about",
      element : <About />,
    },
    {
      path: "./contact",
      element : <Contact />,
    },
  ],
  },
    
  
  ]);
  

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}  />);
