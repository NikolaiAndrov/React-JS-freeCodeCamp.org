import React from "react";
import ReactDom from "react-dom/client";

import "./index.css"

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
  return <article className="book">
    <Image></Image>
    <Title></Title>
    <Author></Author>
  </article>;
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/913C+MR3S5L._AC_UL900_SR900,600_.jpg"
    alt="The Women"
  />
);

const Title = () => <h2>The Women</h2>;
const Author = () => <h4>Kristin Hannah</h4>;

root.render(<BookList></BookList>);
