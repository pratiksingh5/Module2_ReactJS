import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-red-500 h-20">
      <ul className="flex justify-around items-center h-full">
        <Link to="/">
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link to="/contact">
          <li className="cursor-pointer">Contact</li>
        </Link>

        <Link to="about">
          <li className="cursor-pointer">About</li>
        </Link>

        <Link to="services">
          <li className="cursor-pointer">Services</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
