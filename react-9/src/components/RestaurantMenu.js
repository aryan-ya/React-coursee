import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



const RestaurantMenu = () =>{
    //how to read dynamic url
  
   const { resid } = useParams();

//   use proper names
  const [restaurant , setRestaurant] = useState({});
   
  
    useEffect(()=>{
        getRestaurantInfo();
    },[]);
     //use proper names

    async function getRestaurantInfo(){
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="
        );

       const json = await data.json();
       console.log(json);
       setRestaurant(json.data)
    }
   
    return (
        <div>
            <h1>Restaurant id: {resid}</h1>
            <h2>{restaurant.name}</h2>
            <img src={} />
            <h1>Namaste</h1>
        </div>
    )
}


export default RestaurantMenu;


