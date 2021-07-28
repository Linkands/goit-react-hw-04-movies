import { useState, useEffect, useRef } from 'react'
import {
  useParams,
  useRouteMatch,
  Route,
  Link,
  useLocation,
  useHistory,
} from 'react-router-dom'
import { fetchMovieDetails } from '../APIservice/APIservice'
import Cast from '../Cast/Cast'
import Reviews from '../Reviews/Reviews'

function MovieDetailsPage() {
  const [id, setId] = useState()
  const { url, path } = useRouteMatch()

  const { movieId } = useParams()
  const IMG_PATH = 'https://image.tmdb.org/t/p/original/'
  const imgNotFound = 'Sorry, no image found'
  const routerState = useRef(null)
  const history = useHistory()
  const location = useLocation()

  const goBackLocation = location?.state?.from

  const onClickGoBackBtn = () => {
    history.push(goBackLocation)
  }
  // useEffect(() => {
  //   if (!routerState.current) {
  //     routerState.current = location.state
  //   }
  // }, [])

  // const handleGoBack = () => {
  //   const url = routerState.current ? `/?${routerState.current.params}` : '/'
  //   history.push(url)
  //   console.log(routerState.current.from.search)
  //   console.log(url)
  // }

  useEffect(() => {
    async function render() {
      const movie = await fetchMovieDetails(movieId)
      setId(movie)
    }
    render()
  }, [movieId])

  return (
    <>
      {goBackLocation && (
        <button
          // onClick={handleGoBack}
          onClick={onClickGoBackBtn}
        >
          Go back
        </button>
      )}

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
        <div className="additionalInfo">
          <p>Additional Information</p>
          <Link
            className="infoLink"
            to={{
              pathname: `${url}/cast`,
              state: { from: goBackLocation },
            }}
          >
            Cast
          </Link>
          <Link
            className="infoLink"
            to={{
              pathname: `${url}/reviews`,
              state: { from: goBackLocation },
            }}
          >
            Reviews
          </Link>
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
