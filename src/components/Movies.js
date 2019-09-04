import React from 'react';
import { movies } from '../data';


const renderMovie = mov => {
  return (
    <div>
      <h2>{mov.title}</h2>
      <h3>{mov.time}</h3>
      {mov.genres.map(gen => <ul>{gen}</ul>)}
    </div>
  )
}

const Movies = () => {
  console.log(movies)
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(mov => renderMovie(mov))}
    </div>
  );
};

export default Movies;
