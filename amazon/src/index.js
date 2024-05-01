import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";

const root = ReactDom.createRoot(document.getElementById("root"));

const title = "The Women"; 
const author = "Kristin Hannah";
const img = "./images/image1.jpg";

const BookList = () => {
  return (
    <section className="booklist">
      <Book title={title} author={author} img={img}></Book>
      <Book title={title} author={author} img={img}></Book>
      <Book title={title} author={author} img={img}></Book>
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
