import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));

function Greeting(){
    return <h2>Hello World! This is my first component.</h2>
}

root.render(<Greeting/>);