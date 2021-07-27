import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieReviews } from '../APIservice/APIservice'

function Reviews() {
  const [reviews, setReviews] = useState(null)
  const params = useParams()

  useEffect(() => {
    async function render() {
      const cast = await fetchMovieReviews(params.movieId)
      setReviews(cast.results)
    }
    render()
  }, [params.movieId])
  return (
    <>
      {reviews &&
        (reviews.length > 0 ? (
          <ul className="reviews">
            {reviews.map((review) => (
              <li key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We dont have any reviews for this movie</p>
        ))}
    </>
  )
}

export default Reviews
