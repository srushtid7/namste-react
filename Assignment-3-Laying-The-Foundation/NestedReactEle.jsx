import React from "react";
import ReactDOM from "react-dom/client";

// Creation of nested header Element  using React.createElement (h1,h2,h3 inside a div with class="title")
const heading1 = React.createElement("h1",null,"Heading1 from nestedReactElement");
const heading2 = React.createElement("h2",null,"Heading2 from nestedReactElement");
const heading3 = React.createElement("h3",null,"Heading3 from nestedReactElement");

const container1 = React.createElement("div",{className:"title"},[heading1,heading2,heading3]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container1);

