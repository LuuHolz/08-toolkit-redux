import { createSlice } from '@reduxjs/toolkit';

export const pokeomnSlice = createSlice({
    name: 'pokemon',
    initialState: {
            page: 0,
            pokemons: [],
            isLoading: false,
        },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {

            state.isLoading = true;
        },
        setPokemons: ( state, action ) => {
            console.log(action);
        }
    }
});


export const { startLoadingPokemons, setPokemons } = pokeomnSlice.actions;