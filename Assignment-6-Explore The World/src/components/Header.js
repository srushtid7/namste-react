import { useState } from "react";

const loggedInUser = () => {
  //some api call to check authentication
  return true;
};

const Title = () => (
  <a href="/">
    <img
      alt="logo"
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQP8H2paO0fRUrqkMP4Pb5bj6sWqAITUOveg&usqp=CAU"
    ></img>
  </a>
);

const Header = () => {
  const [title, setTitle] = useState("Food Villa");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <button onClick={() => setTitle("New Food App")}>change title</button>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={()=>setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
