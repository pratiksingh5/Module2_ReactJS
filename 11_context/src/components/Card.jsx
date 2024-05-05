import React , {useContext} from "react";
import MovieContext from "../context/MovieContext";


function Card() {

   const {movie} = useContext(MovieContext); 
  return (
    <div className="h-64 w-64 bg-yellow-300 rounded-lg text-center p-8">
      <ul>
        <li>Movie: {movie} </li>
      </ul>
    </div>
  );
}

export default Card;
