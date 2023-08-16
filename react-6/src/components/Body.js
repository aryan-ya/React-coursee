import { restaurantList } from '../../contants'; 
 

import RestaurantCard from "./RestaurantCard";






const Body = () => {
  let searchTxt = "KFC";
    return (
     <>

      <div className="search-container">
        <input type='text' className='search-input' placeholder='Search'value={searchTxt}   />
      </div>
      
      <div className="restaurant_list">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
      </>
    );
  };


  export default Body;