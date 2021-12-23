import {Switch, Route} from 'react-router-dom'
import {lazy , Suspense } from 'react';

import Loader from "react-loader-spinner";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>import("./pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFound"));


const Routes = () => {
    return (
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
    )
}

export default Routes;