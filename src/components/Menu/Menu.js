import React from "react";

const Menu = ({ menu: { name, link } }) => {
  return (
    <div className="bg-gray-800 text-center container mx-auto">
      <li className="pr-16 text-xl ">
        <a href={link}>{name}</a>
      </li>
    </div>
  );
};

export default Menu;
