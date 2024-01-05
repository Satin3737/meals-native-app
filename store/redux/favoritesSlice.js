import {createSlice} from '@reduxjs/toolkit';

export const getFavoritesIds = store => store.favorites.ids;

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavorite: (state, {payload}) => {
            state.ids.push(payload);
        },
        removeFavorite: (state, {payload}) => {
            state.ids.splice(state.ids.indexOf(payload), 1);
        }
    }
});

export const {addFavorite, removeFavorite} = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
