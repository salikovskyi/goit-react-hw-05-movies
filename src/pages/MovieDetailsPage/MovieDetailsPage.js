import { useEffect, useState } from "react";

import { NavLink, Route, useHistory, useLocation, useParams } from "react-router-dom";

import moviesApi from '../../services/fetchApi'

import css from './MovieDetailsPage.module.css'

import Cast from '../../components/Cast/Cast'
import Reviews from "../../components/Reviews/Reviews";





const MovieDatailsPage = () => {

    const [movie, setMovie] = useState(null);


    const location = useLocation();
    const history = useHistory();
    const {id} = useParams();
    useEffect(() => {
        const getMovie = async () => {
            const currentMovie = await moviesApi.getMovieDatails(id)
            setMovie(currentMovie)
        }
        getMovie();
    }, [id])


    const handleGoBack = () => {
        history.push(location?.state?.from ?? '/')
      };


  return (
      
    <div className={css.wrapper}>
        <div className={css.lopa}>
        {movie && <>
      <div>
        <img src={
                        movie?.data?.poster_path
                        ? `https://image.tmdb.org/t/p/w400${movie?.data.poster_path}`
                        : "https://picsum.photos/300/450"
                    } alt="" />
      </div>
      <div>
          <h2 className={css.title}>{movie?.data.original_title}</h2>
          <p className={css.description}>Use score: <span className={css.span}>{movie?.data.vote_average}</span></p>
          <h2 className={css.subtitle}>Overview</h2>
          <p className={`${css.overview} ${css.description}`}>{movie?.data.overview ? movie.data.overview : "No overwies yet"}</p>
          <h2 className={css.subtitle}>Genres</h2>
          <p className={css.description}>{movie?.data.genres.map((genre) => genre.name).join(", ")}</p>
          <div className={css.kurva}>
        <NavLink to={`/movies/${id}/cast`} className={css.link} activeClassName={css.active}>cast</NavLink>
        <NavLink to={`/movies/${id}/reviews`} className={css.link} activeClassName={css.active}>reviews</NavLink>
        
        </div>
     
      </div>

      </> || <h1 className={css.notitle}>НЕ ПОЛУЧИЛОСЬ ЗАГРУЗИТЬ ФИЛЬМ</h1>

}
        </div>
   
        <Route path='/movies/:id/cast' >
            <Cast id={id} />
        </Route>
        <Route path='/movies/:id/reviews'>
            <Reviews id={id} />
        </Route>
        <button onClick={handleGoBack} type="button" className={css.button}>
        Назад
        </button>

    </div>
                
  );
};

export default MovieDatailsPage;
