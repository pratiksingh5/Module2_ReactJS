import React , {useContext} from 'react';
import MovieContext from "../context/MovieContext";


function Sidebar() {

  const {setMovie} = useContext(MovieContext);

// const handleMovieChange = (value) => {
//     setMovie(value)
// }

  return (
    <div className='w-80 bg-green-500 p-8'>
        <ul>
            <li className='bg-orange-300 mb-3' onClick={() => {setMovie("3 Idiot")}}>3 Idiots</li>
            <li className='bg-orange-300' onClick={() => {setMovie("Sholay")}} >Sholay</li>
        </ul>
    </div>
  )
}

export default Sidebar