import { createContext, useState } from "react";

const FavoriteContext = createContext(
    {
        favorites: [],
        totalFavorites: 0,
        addFavorite: function(meetup){},
        removeFavorite: function(id){},
        isFavorite: function(id){}
    }
);
// Function added in the object context above is meant to help with auto-completion.
// That's why they do not return anything.
// Object declared in the above is the default value of the context

export function FavoriteContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([]);
    
    function addFavoriteHandler(fav){
        setUserFavorites(function(prev){
            return prev.concat(fav);
        })
    }

    function removeFavoriteHandler(id){
        setUserFavorites(function(prev){
            return prev.filter(function(d){
                return d.id !== id;
            });
        })
    }

    function isFavoriteHandler(id){
        return userFavorites.some(function(d){return d.id === id});
    }
    
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isFavorite: isFavoriteHandler
    };
    
    return <FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>
}

export default FavoriteContext;