import React from "react";
import ReactDOM from "react-dom/client";

import container1 from "./NestedReactEle";

// React.createElement ==> Object ==> HTML DOM (Compiled By Babel)

// OLD WAY OF CREATING ELELMENT
// const heading = React.createElement(
//   "h1",
//   { id: "title", key: "h2" },
//   "Namaste React",
//   [] //passing multiple children in react as an array
// );

// JSX? - JSX ==> React.createElement ==> Object ==> HTML DOM (compiled by Babel)
const title = (
  <h1 id="title" key="h2" className="heading">
    Namaste React from React Element
  </h1>
); // this is called JSX expression

//REACT COMPONENTS
// FUNCTIONAL COMPONENTS - NEW WAY TO WRITE COMPONENT

const HeaderComponent = function () {
  return (
   
    <div>
       {title}  
      <h1>Namaste React Functional Component</h1>
      <h2>This is h2 tag from Functional Component</h2>
      {container1}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//passing react element in root and root renders
root.render(<HeaderComponent />);
