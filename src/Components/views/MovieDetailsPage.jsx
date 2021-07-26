import { useState, useEffect } from 'react'
import { useParams, useRouteMatch, Route, Link } from 'react-router-dom'
import { fetchMovieDetails } from '../APIservice/APIservice'
import Cast from '../Cast/Cast'
import Reviews from '../Reviews/Reviews'

function MovieDetailsPage() {
  const [id, setId] = useState()
  const { url, path } = useRouteMatch()

  const params = useParams()
  const IMG_PATH = 'https://image.tmdb.org/t/p/original/'
  const imgNotFound = 'Sorry, no image found'

  useEffect(() => {
    async function render() {
      const movie = await fetchMovieDetails(params.movieId)
      setId(movie)
    }
    render()
  }, [params.movieId])

  return (
    <>
      <div className="movieDetailsWrapper">
        {id && (
          <>
            <div>
              <img
                src={
                  id.poster_path ? `${IMG_PATH}${id.poster_path}` : imgNotFound
                }
                alt={id.original_title}
                width={250}
              ></img>
            </div>
            <div className="movieDetailsInfo">
              {' '}
              <h2>
                {id.original_title} ({id.release_date.substring(0, 4)})
              </h2>
              <p>User Score: {id.vote_average}/10</p>
              <h3>Overview</h3>
              <p>{id.overview}</p>
              <h3>Genres</h3>
              <p>{id.genres.map((genre) => genre.name).join(', ')}</p>
            </div>
          </>
        )}
      </div>
      <div>
        <div>
          <p>Additional Information</p>
          <Link
            to={{
              pathname: `${url}/cast`,
            }}
          >
            Cast
          </Link>
          <Link to={`${url}/reviews`}>Reviews</Link>
        </div>

        <Route path={`${path}/cast`}>
          <Cast />
        </Route>

        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </div>
    </>
  )
}

export default MovieDetailsPage
