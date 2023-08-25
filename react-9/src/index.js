


import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";


const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement : <Error />,
  
    },
    {
      path: "/about",
      element : <About />,
    },
  
  
  
  ]);
  

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}  />);
