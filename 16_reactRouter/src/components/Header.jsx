import React from "react";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[10vh] bg-orange-300 flex items-center px-20">
      <div className="logo text-green-600 font-bold bg-white p-2">
        <Link to="/">Router</Link>
      </div>
      <ul className="flex gap-6 ml-auto">
        <li>
          <NavLink
            to="/about"
            className={({isActive}) => { 
                return isActive ? "bg-red-400 font-bold p-2" : "";
            }}
          >
            About
          </NavLink>
        </li>
        <li>
        <NavLink
            to="/gallery"
            className={({isActive}) => { 
                return isActive ? "bg-red-400 font-bold p-2" : "";
            }}
          >
            Gallery
          </NavLink>
        </li>
        <li>
        <NavLink
            to="/contact"
            className={({isActive}) => { 
                return isActive ? "bg-red-400 font-bold p-2" : "";
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
