import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/userContext";
import { useContext } from "react";

const RestaurantCard = ({
    name,
    cloudinaryImageId,
    cuisines,
    lastMileTravelString,
  }) => {
    const {user} =useContext(UserContext)
    return (
      <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString}</h4>
        <h5 className="font-bold">{user.name}-{user.email}</h5>
      </div>
    );
  };
  export default RestaurantCard;