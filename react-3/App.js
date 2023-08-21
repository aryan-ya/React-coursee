
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "key" }, "Hello everyone!");

const h1 = React.createElement("h1", { id: "key" }, "Heading 1 for parcel");

const h2 = React.createElement("h2", { id: "key" }, "Heading 2 for parcel");

const container = React.createElement("div", { id: "container" }, [
  heading,
  h1,
  h2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);


console.log("aryan");