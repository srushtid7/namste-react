import React from "react";
import ReactDOM from "react-dom/client";

//Component compostion (Add a component inside another)
const TitleComponent = () => (
  <h2>I am child TitleCommponent inside Container Component !</h2>
);

const ContainerComponent = () => (
  <div>
    <TitleComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContainerComponent />);
