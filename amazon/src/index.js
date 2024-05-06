import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";
import { books } from "./books";
import { Book } from "./Book";

const root = ReactDom.createRoot(document.getElementById("root"));

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((b, index) => {
        return <Book {...b} key={b.key} number={index} />;
      })}
    </section>
  );
};

root.render(<BookList></BookList>);
