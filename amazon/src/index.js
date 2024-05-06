import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";
import { books } from "./books";

const root = ReactDom.createRoot(document.getElementById("root"));

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((b) => {
        return <Book {...b} key={b.key} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const {img, title, author} = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

root.render(<BookList></BookList>);
