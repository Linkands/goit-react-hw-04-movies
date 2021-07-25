import React from 'react'

function MoviesList({ moviesData, onClick }) {
  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {moviesData.map((movie) => (
          <li key={movie.id}>{movie.original_title}</li>
        ))}
      </ul>
    </div>
  )
}

export default MoviesList
