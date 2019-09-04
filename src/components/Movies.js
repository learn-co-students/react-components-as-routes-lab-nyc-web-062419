import React from "react";
import { movies } from "../data";

const Movies = () => {
  // let movie = movies.map(movie => movie.title, movie.times);
  // return <div>{/*{code here}*/ movie}</div>;
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h3>Name: {movie.title}</h3>
          <p>Time: {movie.time}</p>
          <p>Genres:</p>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
