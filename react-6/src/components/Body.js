
import { useState } from 'react';
import { restaurantList } from '../../contants'; 


import RestaurantCard from "./RestaurantCard";






const Body = () => {
// let searchTxt = "KFC";
// const [searchText ] = useState("KFC");

const [searchInput , setSearchInput]  = useState("KFC");

    return (
     <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input" 
                    placeholder="search"
                    value={searchInput}
                    onChange={(e) =>{ 
                     setSearchInput(e.target.value);
                    }}
                />

        <button className="search-btn">Search</button>
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


  // 1.40