import { useState,useEffect } from "react";

const useRestaurantList = ()=>{

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  return allRestaurants;
  return filteredRestaurants;
}
export default useRestaurantList;