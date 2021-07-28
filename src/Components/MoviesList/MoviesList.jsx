import React from 'react'
import { Link, useLocation, useRouteMatch } from 'react-router-dom'

function MoviesList({ moviesData }) {
  const location = useLocation()
  const routeUrl = useRouteMatch().url
  const url = routeUrl === '/' ? '/movies' : routeUrl

  return (
    <div>
      <ul>
        {moviesData.map((movie) => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `${url}/${movie.id}`,
                state: { from: location },
              }}
            >
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MoviesList
