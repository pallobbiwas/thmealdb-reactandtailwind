import { CheckIcon, ShoppingBagIcon } from "@heroicons/react/solid";
import React from "react";

const Fish = ({ addToCart, fish }) => {
  const { strArea, strMeal, strCategory, strMealThumb } = fish;
  return (
    <div className="bg-indigo-500 p-4 rounded">
      <h1 className="text-2xl py-2">{strMeal}</h1>
      <img className="w-56 mx-auto rounded-md" src={strMealThumb} alt="" />
      <div className="text-left">
        <h2 className="text-xl my-2">Ingrident</h2>

        <p className="flex">
          <CheckIcon className="w-6 h-6"></CheckIcon>
          {strArea}
        </p>
        <p className="flex">
          <CheckIcon className="w-6 h-6"></CheckIcon>
          {strCategory}
        </p>
      </div>
      <button onClick={() => addToCart(fish)} className="px-10 py-2 w-full rounded bg-indigo-700 flex hover:bg-orange-500 duration-500">Add to card <ShoppingBagIcon className="w-6 h-6 ml-20"></ShoppingBagIcon></button>
    </div>
  );
};

export default Fish;
