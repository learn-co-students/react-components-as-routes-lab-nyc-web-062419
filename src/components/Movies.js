import React from "react"
import { movies } from "../data"

const Movies = () => {
  const allMovies = movies.map(movie => (
    <div>
      {movie.title}
      time: {movie.time}
      genres: {movie.genres}
      metascore: {movie.metascore}
    </div>
  ))
  return (
    <div>
      <h1>Movies Page</h1>
      {allMovies}
    </div>
  )
}

export default Movies
