import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
      <button className="m-2 p-2 bg-pink-200" onClick={() => handleClearCart()}>
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default Cart;
