import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import { fetchMovies } from './Components/APIservice/APIservice'
// import Cast from './Components/Cast/Cast'
import HomePage from './Components/views/HomePage'
import MovieDetailsPage from './Components/views/MovieDetailsPage'
// import Reviews from './Components/Reviews/Reviews'
import Navigation from './Components/Navigation/Navigation'
import MoviesPage from './Components/views/MoviesPage'
import NotFoundView from './Components/views/NotFoundView'

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/">
          <h2>Trending today</h2>
          <HomePage />
        </Route>

        <Route exact path="/movies">
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  )
}

export default App
