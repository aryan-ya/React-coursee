import React from 'react';
import  ReactDOM  from "react-dom/client";





const heading  = (
  <h1 id="title" key="h2">
    Namaste react
  </h1>
)

const HeaderComponent = () => {
  return (
  <div>
   <h1>aryan</h1>
  <h1>Namaste react functional components </h1>;

  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

// 1.39