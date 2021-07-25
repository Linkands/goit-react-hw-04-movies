import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import { fetchMovies } from './Components/APIservice/APIservice'
import Cast from './Components/Cast/Cast'
import HomePage from './Components/HomePage/HomePage'
import MovieDetailsPage from './Components/MovieDetailsPage/MovieDetailsPage'
import Reviews from './Components/Reviews/Reviews'
import Navigation from './Components/Navigation/Navigation'
import MoviesPage from './Components/MoviesPage/MoviesPage'

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/movies">
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">{/* <MovieDetailsPage /> */}</Route>
      </Switch>
    </div>
  )
}

export default App
