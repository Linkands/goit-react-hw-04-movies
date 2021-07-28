import { useState, useEffect, useRef } from 'react'
import { fetchMoviesBySearch } from '../APIservice/APIservice'
import { useHistory, useLocation } from 'react-router'
import MoviesList from '../MoviesList/MoviesList'

function MoviesPage() {
  const history = useHistory()
  const location = useLocation()
  const initQuery = new URLSearchParams(location.search).get('query') ?? ''
  const [searchQuery, setSearchQuery] = useState(initQuery)
  const [moviesList, setMoviesList] = useState([])

  const isFirstLoading = useRef(true)

  async function render() {
    const movie = await fetchMoviesBySearch(searchQuery)
    setMoviesList(movie)
    history.push({ ...location, search: `query=${searchQuery}` })
  }

  const onChangeQuery = ({ target }) => {
    setSearchQuery(target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    render()
  }

  useEffect(() => {
    if (initQuery !== '' && isFirstLoading.current) {
      isFirstLoading.current = false
      render()
    }
  })

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies"
          autoComplete="off"
          name="searchQuery"
          onChange={onChangeQuery}
          value={searchQuery}
        ></input>
        <button type="submit">Search</button>
      </form>
      {searchQuery && <MoviesList moviesData={moviesList}></MoviesList>}
    </>
  )
}

export default MoviesPage
