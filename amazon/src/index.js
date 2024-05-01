import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";

const root = ReactDom.createRoot(document.getElementById("root"));

const BookList = () => {
  return (
    <section className="booklist">
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <img src="./images/image1.jpg" alt="The Women" />
      <h2>The Women</h2>
      <h4>Kristin Hannah</h4>
    </article>
  );
};

root.render(<BookList></BookList>);
