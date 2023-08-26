import React from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";





// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

function  App() {
  return (
    <div className="App">
<Contact />
<Header />

<Body />
<About />
<Footer />


    </div>
  );
}

// const root = createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);


export default App;












