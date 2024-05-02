import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";

const root = ReactDom.createRoot(document.getElementById("root"));

const firstBook = {
  title: "The Women",
  author: "Kristin Hannah",
  img: "https://m.media-amazon.com/images/I/913C+MR3S5L._SL1500_.jpg",
};

const secondBook = {
  title: "Mom, I Want to Hear Your Story",
  author: "Jeffrey Mason",
  img: "https://m.media-amazon.com/images/I/71sOqrd6JHL._SL1499_.jpg",
};

const thirdBook = {
  title: "The Lost Book of Herbal Remedies",
  author: "Claude Davis",
  img: "https://m.media-amazon.com/images/I/71++zre30EL._SL1360_.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book title={firstBook.title} author={firstBook.author} img={firstBook.img}></Book>
      <Book title={secondBook.title} author={secondBook.author} img={secondBook.img}></Book>
      <Book title={thirdBook.title} author={thirdBook.author} img={thirdBook.img}></Book>
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

root.render(<BookList></BookList>);
