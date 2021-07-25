import {useContext} from 'react';

import styleItems from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoriteContext from '../../store/favorite-context';

export default function MeetupItem(props){
    const favCtx = useContext(FavoriteContext);
    const isFav = favCtx.isFavorite(props.id);

    function toggleFavoriteStatusHandler(e){
        if (isFav) {
            favCtx.removeFavorite(props.id);
        } else {
            favCtx.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description
            })
        }
    }
    return (
        <li className={styleItems.item}>
            <Card>
                <div className={styleItems.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={styleItems.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={styleItems.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{isFav? "Remove Favorites": "Add to Favorites"}</button>
                </div>
            </Card>
        </li>
    );
}