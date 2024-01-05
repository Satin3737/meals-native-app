import {createContext, useState} from 'react';

const FavoritesContext = createContext();

const FavoritesContextProvider = ({children}) => {
    const [ids, setIds] = useState([]);

    const addFavorite = id => setIds(state => [...state, id]);
    const removeFavorite = id => setIds(state => state.filter(item => item !== id));

    const value = {ids, addFavorite, removeFavorite};

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export {FavoritesContextProvider, FavoritesContext};
