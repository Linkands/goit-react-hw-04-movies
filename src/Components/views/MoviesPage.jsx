import { useState, useEffect, useRef } from 'react'
import { fetchMoviesBySearch } from '../APIservice/APIservice'
import MoviesList from '../MoviesList/MoviesList'

function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [moviesList, setMoviesList] = useState([])

  const mounted = useRef(false)

  useEffect(() => {})
  const handleSearch = (e) => {
    e.preventDefault()
    setSearchQuery(e.target.elements.searchQuery.value)
  }

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    async function render() {
      const movie = await fetchMoviesBySearch(searchQuery)
      console.log(searchQuery)
      console.log(movie)
      setMoviesList(movie)
    }
    render()
  }, [searchQuery])

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies"
          autoComplete="off"
          name="searchQuery"
        ></input>
        <button type="submit">Search</button>
      </form>
      {searchQuery && <MoviesList moviesData={moviesList}></MoviesList>}
    </>
  )
}

export default MoviesPage
