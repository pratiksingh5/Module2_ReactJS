import React, { useContext } from "react";
// import {MovieContext} from "../context/MovieContext";
import MovieContext from "../context/MovieContext";

function Header() {
  const { movie } = useContext(MovieContext);
  return (
    <div className="h-20 bg-blue-700 text-right p-8 text-white">{movie}</div>
  );
}

export default Header;
