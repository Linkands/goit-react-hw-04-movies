import { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import MovieDetailsPage from './Components/views/MovieDetailsPage'
import Navigation from './Components/Navigation/Navigation'

// import HomePage from './Components/views/HomePage'
// import MoviesPage from './Components/views/MoviesPage'
// import NotFoundView from './Components/views/NotFoundView'

const HomePage = lazy(() => import('./Components/views/HomePage'))
const MoviesPage = lazy(() => import('./Components/views/MoviesPage'))
const NotFoundView = lazy(() => import('./Components/views/NotFoundView'))

function App() {
  return (
    <div>
      <Navigation></Navigation>

      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  )
}

export default App
