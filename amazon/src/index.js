import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));

const BookList = () => {
  return <section>
    <Book></Book>
  </section>;
};

const Book = () => {
  return <article>
    <Image></Image>
    <Title></Title>
    <Author></Author>
  </article>;
};

const Image = () => <h2>image placeholder</h2>;
const Title = () => <h2>Book Title</h2>;
const Author = () => <h2>Book Author</h2>;

root.render(<BookList></BookList>);
