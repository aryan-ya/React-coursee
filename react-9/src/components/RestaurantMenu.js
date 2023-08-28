import { useEffect } from "react";
import { useParams } from "react-router-dom";


const RestaurantMenu = () =>{
    //how to read dynamic url
    const { resId } = useParams();
  
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
    }
   
    return (
        <div>
            <h1>Restaurant id: {resId}</h1>
            <h1>Namaste</h1>
        </div>
    )
}


export default RestaurantMenu;


