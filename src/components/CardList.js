import React from "react";
import Card from "./Card";

const movies = [
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    year: "2022",
    imageUrl:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
];

function CardList() {
  return (
    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
      {movies.map((item) => (
        <Card movie={item} />
      ))}
    </div>
  );
}

export default CardList;
