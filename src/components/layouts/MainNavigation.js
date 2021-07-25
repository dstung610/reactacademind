import {Link} from 'react-router-dom';

import navStyle from './MainNavigation.module.css';
import FavoriteContext from '../../store/favorite-context';
import { useContext } from 'react';

export default function MainNavigation(){
    const favCtx = useContext(FavoriteContext);
    return (

        <header className={navStyle.header}>
            <div className={navStyle.logo}> React Meetup </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>
                            My Favorites
                            <span className={navStyle.badge}>{favCtx.totalFavorites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}