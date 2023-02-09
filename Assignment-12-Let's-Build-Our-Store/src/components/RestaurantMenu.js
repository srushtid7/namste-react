import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import { addItem } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // const [restaurant, setRestaurant] = useState(null);

  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>{restaurant?.name}</h1>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>City name: {restaurant?.city}</h3>
        <h3>Rating: {restaurant?.avgRating}</h3>
        <h3>Price: {restaurant?.costForTwoMsg}</h3>
      </div>

      <div className="p-5">
        <h1>MENU</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>
              {item.name} -{" "}
              <button
                className="p-1 m-5 bg-pink-200"
                onClick={() => addFoodItem(item)}
              >
                Add Item
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
