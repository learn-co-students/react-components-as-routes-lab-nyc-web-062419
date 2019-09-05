import React from "react"
import { actors } from "../data"

const Actors = () => {
  const allActors = actors.map(actor => (
    <div className="actor">
      {actor.name}
      <br />
      {actor.movies}
    </div>
  ))
  return (
    <div>
      <h1>Actors Page</h1>
      {allActors}
    </div>
  )
}

export default Actors
