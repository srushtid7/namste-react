import React from "react";

import ReactDOM from "react-dom/client";
////// Creation of nested header Element  using Functional Components (h1,h2,h3 inside a div with class="title")
const heading1 = <h1>Heading 1 from Nested Function Component</h1>;
const heading2 = <h2>Heading 2 from Nested Function Component</h2>;
const heading3 = <h3>Heading 3 from Nested Function Component</h3>;

const ContainerComponent = () => (
  <div className="title">
    {heading1}
    {heading2}
    {heading3}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContainerComponent />);
