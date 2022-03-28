import React from "react";

const Carts = ({ item }) => {
    console.log(item);
  return (
    <div>
      <h1>{item.strMeal}</h1>
    </div>
  );
};

export default Carts;
