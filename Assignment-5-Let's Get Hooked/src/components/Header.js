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
  return (
    <div className="header">
      <Title/>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;