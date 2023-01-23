import { restaurantlist } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((res) =>
    res?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  // searchText is a local state variable for searching in input box
  const [searchText, setSearchText] = useState("");

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
  
  if(!allRestaurants) return null; // not render component (Early return)

  
  return (allRestaurants?.length === 0) ? <Shimmer/> : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            // need to update the restaurants
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {
        filteredRestaurants?.map((restaurant) => {
          return (
            <Link to = {"/restaurant/"+restaurant.data.id} key={restaurant.data.id} ><RestaurantCard {...restaurant.data} /></Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
