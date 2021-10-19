import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
function BookShelf() {
  return (
    <div>
      <article className="topbar">
        <div className="navbar"></div>
      </article>
      // <h1>List of The Books</h1>
      <section className="BookShelf">
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
      </section>
    </div>
  );
}

const Book = () => {
  return (
    <article className="Book">
      <Image></Image>
      <Title />
      <Author />
      <Price></Price>
    </article>
  );
};

const Title = () => {
  return <h2>Harry Potter</h2>;
};
const Author = () => {
  return (
    <h3>
      <a href="#">JK Rowling</a>
    </h3>
  );
};
const Image = () => {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"
      alt="Harry Potter"
    ></img>
  );
};
const Price = () => {
  return <p>$13.99</p>;
};

ReactDOM.render(<BookShelf></BookShelf>, document.getElementById("root"));
