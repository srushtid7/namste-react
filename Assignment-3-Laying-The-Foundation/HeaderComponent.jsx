import React from "react";
import ReactDOM from "react-dom/client";

//Create Header Component from scratch using function component with JSX
// 1.Add logo on left 2.Add a search bar in middle 3.Add user icon on right 4. Add CSS to make it look nice

const HeaderComponent = ()=>(
    <div className="headerClass">
        <img src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884__340.png" alt="logo" className="logo"></img>
        <div className="searchContainer">
        <input type="text" placeholder="Search" className="search-input"></input>
        <button><img src="https://cdn2.vectorstock.com/i/1000x1000/02/46/search-icon-blue-monochrome-color-vector-23770246.jpg" alt="search-lense"className="search-lense"></img></button> 
        </div>
        <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="user-icon" className="user-icon"></img>

    </div>
);

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);