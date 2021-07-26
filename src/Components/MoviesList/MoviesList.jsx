import React from 'react'
import { Link } from 'react-router-dom'

function MoviesList({ moviesData }) {
  return (
    <div>
      <ul>
        {moviesData.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MoviesList
