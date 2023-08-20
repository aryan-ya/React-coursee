 import {useState} from "react";
 
 
 const Title  = () =>(
    <a href="/">
   <img src="https://marketplace.canva.com/EAFXIvlL2Ns/2/0/1600w/canva-brown-and-black-vintage-food-restaurant-logo-YASJJho2Kzw.jpg" height="80px" width="80px" alt=""  />
   
    </a>
   );


   const Header = () => {

     
     const [title ,setTitle] = useState("food villa");

    return (
    <div className='header'>
     <Title />
     <h1>{title}</h1>
     <button onClick = {() => setTitle("New food app")}>Change title</button>

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
  
   

export default Header;


