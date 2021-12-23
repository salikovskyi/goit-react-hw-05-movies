import {useState, useEffect} from 'react';
import{ Link, useLocation} from 'react-router-dom';

import moviesApi from '../../services/fetchApi'

import css from './HomePage.module.css'

const HomePage = () => {

    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const getMovies = async() => {
            const { data } = await moviesApi.getTrendingMovies();
            setMovies(data.results)
        }
        getMovies()
    }, [])
    
const element = movies.map(({id, original_name, title, poster_path}) => {
    const name = title || original_name;
    return(
        <Link to={{pathname: `/movies/${id}`, state:{from: location}}} className={css.link} key={id}>
        <li>
            
            <img className={css.image} src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
            <p className={css.text}>{name}</p>

        </li>
        </Link>
    )
})
return (
    <div>
        <h2 className={css.title}>Trending Today</h2>
        <ul className={css.list}>
            {element}
        </ul>
    </div>
 
)

}


export default HomePage;