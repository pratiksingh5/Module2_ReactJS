import React from "react";
import { Header, Sidebar, Panel } from "./components";
import "./App.css";
import MovieProvider from "./context/MovieProvider";

function App() {
  // const [movie, setMovie] = React.useState("Saitaan");

  return (
    // <div className="bg-red-500">
    //   <Header movie = {movie}/>
    //   <div className="flex down">
    //     <Sidebar movie ={movie} setMovie = {setMovie} />
    //     <Panel movie = {movie}/>
    //   </div>
    // </div>

    <MovieProvider>
      <div className="bg-red-500">
        <Header />
        <div className="flex down">
          <Sidebar />
          <Panel />
        </div>
      </div>
    </MovieProvider>
  );
}

export default App;
