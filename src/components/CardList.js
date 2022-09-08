import React from "react";
import Card from "./Card";

function CardList({ results }) {
  let data = [];

  if (results.data) {
    data = results.data || [];
  }

  console.log("results", results);
  return (
    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ">
      {data.map((item) => (
        <Card movie={item} />
      ))}
    </div>
  );
}

export default CardList;
