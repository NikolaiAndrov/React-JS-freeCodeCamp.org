import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));

function Greeting() {
  return(
  <div>
    <h1>Hello World!</h1>
    <h2>This is my first component</h2>
    <h3>Happy to learn React JS</h3>
  </div>);
}

root.render(<Greeting />);