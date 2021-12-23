import { useEffect, useState } from "react";
import {Link, useLocation, useHistory} from 'react-router-dom';
import Notiflix from "notiflix";
import moviesApi from '../../services/fetchApi'
import css from './MoviesPage.module.css'



const MoviePage = () => {

    const [foundMovies, setFoundMovies] = useState([]);
    const [movieToFind, setMovieToFind] = useState('')

    const location = useLocation();
    const history = useHistory();


    useEffect(() => {
      const searchString = new URLSearchParams(location.search).get("query");
  
      if (searchString) {
        const getMovies = async () => {
          const { data } = await moviesApi.searchMovie(searchString);
  
          setFoundMovies(data.results);
          setMovieToFind("");
        };
  
        getMovies();
      }
    }, [location.search]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (movieToFind.trim()) {
          const { data } = await moviesApi.searchMovie(movieToFind);
    
          setFoundMovies(data.results);
          setMovieToFind("");
    
          if (data.results.length === 0) {
            Notiflix.Notify.failure(
              "Нету ничего | There is nothing"
            );
          }
          history.push({
            ...location,
            search: `query=${movieToFind}`,
          });
        }
    }

   

return (
    <section>
      <div >
        <form onSubmit={handleSubmit} className={css.form}>
            <input
            className={css.input}
            type="text"
            placeholder="Find movie"
            value={movieToFind}
            onChange={(e) => setMovieToFind(e.target.value)}
          />

          <button className={css.button} type="submit">
          </button>
        </form>
          <ul className={css.list}>
            {foundMovies.map(({ id, title, poster_path }) => (
              <Link
              className={css.link}
                to={{
                  pathname: `/movies/${id}`,
                  state: {
                    from: location
                  },
                }}
              >
              <li  key={id}>
                
                  <img className={css.image}
                    src={
                        poster_path
                        ? `https://image.tmdb.org/t/p/w300${poster_path}`
                        : "https://picsum.photos/300/450"
                    }
                    alt={title}
                  />
                  <p className={css.text}>{title}</p>
                
              </li>
              </Link>
            ))}
          </ul>
          </div>
          </section>
)
}

export default MoviePage;