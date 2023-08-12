import React from 'react';
import  ReactDOM  from "react-dom/client";
import './index.css';



const Title  = () =>(
 <a href="/">
<img src="https://marketplace.canva.com/EAFXIvlL2Ns/2/0/1600w/canva-brown-and-black-vintage-food-restaurant-logo-YASJJho2Kzw.jpg" height="80px" width="80px" alt="" srcset="" />

 </a>
);




const Header = () => {
  return (
  <div className='header'>
   <Title />
   <div className="nav-items">
   <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>Cart</li>
   </ul>
  </div>
  </div>
  )
}

const RestaurantCard = () =>{
  return (
    <div className='card'>
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r3jtq0ipwol9tby1khja" alt="" srcset="" />

      <h2>Burger king</h2>
      <h3>Burhgers, Americans</h3>
      <h4>4.2 stars</h4>

    </div>
    
  )
   
}
const Body = () =>{
  return (

    <RestaurantCard />
  )
} 

const Footer = () => {
  return (
   <h4>Footer</h4>
  )
}

const AppLayout  = () =>{
  return(
  <>
  <Header />
  <Body />
  <Footer />
  </>
  )
}
  

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

