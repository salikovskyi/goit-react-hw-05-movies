import { useState, useEffect } from "react"
import moviesApi from '../../services/fetchApi'
import css from './Cast.module.css'




const MovieCast =({ id }) => {
    const [cast, setCast] = useState([])

    useEffect(() => {
        const getCast = async () => {
            const {data} = await moviesApi.getMovieCredits(id);
      
            setCast(data.cast)
        }
        getCast()
    },[id]);

    function backToTop() {
        if (window.pageYOffset > 0) {
          window.scrollBy(0, -80);
          setTimeout(backToTop, 0);
        }
      }
      

    const element = cast.map(({id, profile_path, original_name, character }) => (
        <li key={id} className={css.item}>
            <img src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : "https://picsum.photos/300/450"
                } alt={original_name} />
                <div>
                    <p>{original_name}</p>
                    <p>Character: {character}</p>
                </div>
        </li>
    ))
    return(
        <div>
            <ul className={css.list}>
                {cast && element}
            </ul>
            {cast?.length > 10 ?  <button className={css.back_to_top} onClick={backToTop}>↑</button> : null}
           

        </div>
    )
}

export default MovieCast;