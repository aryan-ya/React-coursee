


import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";


const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
  
    },
    {
      path: "/about",
      element : <About />,
    },
  
  
  
  ]);
  

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}  />);
