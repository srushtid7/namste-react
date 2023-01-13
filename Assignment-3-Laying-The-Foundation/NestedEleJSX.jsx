import React from "react";
import  ReactDOM  from "react-dom/client";

//// Creation of nested header Element  using JSX (h1,h2,h3 inside a div with class="title")

const container3 = <div className="title">
    <h1 color="red">Heading 1 Nested Element using JSX</h1>
    <h2>Heading 2 Nested Element using JSX</h2>
    <h3>Heading 3 Nested Element using JSX</h3>
</div>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container3);