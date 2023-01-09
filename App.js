const heading = React.createElement(
    "h1",
    { id: "title" },
    "Heading 1"
  );

  const heading2 = React.createElement(
    "h1",
    { id: "title" },
    "Heading 2"
  );

  const container = React.createElement(
    "div",
    { id: "container" },
    [heading, heading2]  //passing multiple children in react as an array
  );


  console.log(heading); // react element is an object at the end

  const root = ReactDOM.createRoot(document.getElementById("root"));
  //passing react element in root
  root.render(container);