
import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const About =() =>{
  return <div>
  <h1>About us page</h1>
  <p>this is namaste react live project</p>
   <Outlet></Outlet>
  </div>

}

export default About;