import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));

const Greeting = () => {
  return <h1>Hello World!</h1>;
};

const Message = () => {
  return <p>Happy to learn React JS</p>;
};

function Result() {
  return (
    <>
      <Greeting />
      <Message />
    </>
  );
}

root.render(<Result />);
