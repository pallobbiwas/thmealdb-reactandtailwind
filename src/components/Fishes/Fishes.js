import axios from "axios";
import React, { useEffect, useState } from "react";
import Carts from "../Carts/Carts";
import Fish from "../Fish/Fish";
import "./Fishes.css";

const Fishes = () => {
  const [fish, setFish] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
      .then((data) => setFish(data.data.meals));
  }, []);

  //add to cart click handeler is here
  const addToCart = (item) => {
    const newCart = [...items, item]
    setItems(newCart);
  };

  return (
    <div className="mt-32 text-center">
      <h1 className="text-2xl  mb-4">Rate your favorite deals</h1>
      <hr />
      <p className="mt-10 mb-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        adipisci consequuntur voluptatibus autem ad dolorum ex obcaecati ducimus
        libero, facilis id rem molestiae placeat atque suscipit deserunt eveniet
        mollitia quia nostrum quas nesciunt? Nobis beatae odio tempora animi
        perferendis minus!
      </p>
      <div className="grids ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {fish.map((f) => (
            <Fish key={f.idMeal} fish={f} addToCart={addToCart}></Fish>
          ))}
        </div>
        <div className="bg-indigo-900 ml-4">
          <h1 className="py-6">Your order list</h1>
          <hr />
          {items.map((i) => (
            <Carts key={i.idMeal} item={i}></Carts>
          ))}
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Fishes;
