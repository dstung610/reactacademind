import { useContext } from "react";

import FavoriteContext from "../store/favorite-context";
import MeetupList from "../components/meetups/MeetupList";

export default function Favorites(){
    const favCtx = useContext(FavoriteContext);
    let content;

    if (favCtx.totalFavorites === 0){
        content = <p>You got no favorite. Let's add some</p>
    } else {
        content = <MeetupList meetups={favCtx.favorites}/>
    }
    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}