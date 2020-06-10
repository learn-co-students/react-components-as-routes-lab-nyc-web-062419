import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors)
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return (
          <div>
            <h2>{actor.name}</h2>
            {actor.movies.map(mov => <ul>{mov}</ul>)}
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
