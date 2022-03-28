import { MenuIcon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import Menu from "../Menu/Menu";

const Header = () => {
  const route = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Blog", link: "/blog" },
    { id: 4, name: "Contuct", link: "/contuct" },
  ];
  const [open, setOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between bg-slate-800 p-4 rounded">
      <div>
        <h1 className="text-4xl font-mono font-bold text-orange-500">
          The Meal DB
        </h1>
      </div>
      <div className="flex">
        <ul className={`md:flex absolute duration-500 ease-in-out w-full md:static ${open ? 'top-16 left-0'  : 'top-[-120px] left-0'}`}>
          {route.map((r) => (
            <Menu key={r.id} menu={r}></Menu>
          ))}
        </ul>
        <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden">
            {
                open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>
            }
        </div>
      </div>
    </nav>
  );
};

export default Header;
