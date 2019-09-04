import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const mappedActors = actors.map(actor => <div className="actor"> {actor.name} {actor.movies}</div>)
  return (
    <div>
      <h1>Actors Page</h1>
      {mappedActors}
    </div>
  );
};

export default Actors;
