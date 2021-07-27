import { useEffect, useState } from 'react'
import { fetchMovies } from '../APIservice/APIservice'
import MoviesList from '../MoviesList/MoviesList'

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    async function render() {
      const movies = await fetchMovies()
      setTrendingMovies(movies)
    }
    render()
  }, [])

  return (
    <div>
      <MoviesList moviesData={trendingMovies}></MoviesList>
    </div>
  )
}

export default HomePage
