import React from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter } from "react-router-dom";




const appRouter = createBrowserRouter() 

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

function App() {
  return (
    <div className="App">

<Header />
<Body />
<Footer />


    </div>
  );
}

export default App;












