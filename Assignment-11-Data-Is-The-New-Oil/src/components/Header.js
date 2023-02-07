import { useState,useContext } from "react";
import Logo from "../assets/food-villa-logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";

const loggedInUser = () => {
  //some api call to check authentication
  return true;
};

const Title = () => (
  <a href="/">
    <img alt="logo" className="h-28 p-2" src={Logo}></img>
  </a>
);

const Header = () => {

  const {user} = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50" >
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">Cart</li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <span className="p-10 font-bold text-red-900">{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
