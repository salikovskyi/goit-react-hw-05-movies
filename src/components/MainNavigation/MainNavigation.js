import { NavLink, Route } from 'react-router-dom';
import css from './MainNavigation.module.css'


export default function MainNavigation() {
    return (
        <header>
            <nav className={css.navigation}>
                <NavLink exact to="/" className={css.link} activeClassName={css.active}>Home</NavLink>
                <NavLink to="/movies" className={css.link} activeClassName={css.active}>Movies</NavLink>
            </nav>
        </header>
    )
}