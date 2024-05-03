import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";

const root = ReactDom.createRoot(document.getElementById("root"));

const books = [
  {
    title: "The Women",
    author: "Kristin Hannah",
    img: "https://m.media-amazon.com/images/I/913C+MR3S5L._SL1500_.jpg",
  },

  {
    title: "Mom, I Want to Hear Your Story",
    author: "Jeffrey Mason",
    img: "https://m.media-amazon.com/images/I/71sOqrd6JHL._SL1499_.jpg",
  },

  {
    title: "The Lost Book of Herbal Remedies",
    author: "Claude Davis",
    img: "https://m.media-amazon.com/images/I/71++zre30EL._SL1360_.jpg",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((b) => {
        return <Book title={b.title} img={b.img} author={b.author} />;
      })}
    </section>
  );
};

const Book = ({ title, img, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

root.render(<BookList></BookList>);
