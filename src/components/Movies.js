import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const mappedMovies = movies.map(movie => <div> {movie.title} {movie.time} {movie.genres} {movie.metascore}</div>)
  return (
    <div>
      <h1>Movies Page</h1>
        {mappedMovies}
    </div>
  );
};

export default Movies;
