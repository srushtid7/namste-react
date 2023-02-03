import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // const [restaurant, setRestaurant] = useState(null);

  const restaurant = useRestaurant(resId);


  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>{restaurant?.name}</h1>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>City name: {restaurant?.city}</h3>
        <h3>Rating: {restaurant?.avgRating}</h3>
        <h3>Price: {restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>MENU</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((items) => (
            <li key={items.id}>{items.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
