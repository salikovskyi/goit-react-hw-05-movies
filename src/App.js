
import {Switch, Route} from 'react-router-dom'
import {lazy , Suspense } from 'react';
import MainNavigation from './components/MainNavigation/MainNavigation'
// import HomePage from './pages/HomePage/HomePage';
// import MoviePage from './pages/MoviesPage/MoviesPage'
// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
// import NotFoundPage from './pages/NotFound/NotFound';
import './styles/reset.css'
import './App.css';
import Loader from "react-loader-spinner";


const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>import("./pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <div className='App'>
      <MainNavigation />

<Suspense fallback={ <Loader type="ThreeDots" color="#E40010" height={80} width={80} />}>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/movies'>
          <MoviePage />
        </Route>
         <Route path='/movies/:id'>
            <MovieDetailsPage />
         </Route>



         <Route>
           <NotFoundPage />
         </Route>
      </Switch>
      </Suspense>
    </div>
  );
}

export default App;
