import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieCast } from '../APIservice/APIservice'

function Cast() {
  const [cast, setCast] = useState()

  const params = useParams()
  const imgNotFound = 'Sorry, no image found'

  useEffect(() => {
    async function render() {
      const cast = await fetchMovieCast(params.movieId)
      setCast(cast.cast)
    }
    render()
  }, [params.movieId])

  return (
    <>
      {cast && (
        <ul>
          {cast.map((cast) => (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : `${imgNotFound}`
                }
                alt={cast.name}
                width={100}
              />

              <p>
                <span>Actor name:</span> {cast.name}
              </p>
              <p>
                <span>Character:</span> {cast.character}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Cast
