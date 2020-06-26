import React from "react"
import { directors } from "../data"

const Directors = () => {
  const allDirectors = directors.map(dir => (
    <div>
      {dir.name}
      {dir.movies}
    </div>
  ))
  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors}
    </div>
  )
}

export default Directors
