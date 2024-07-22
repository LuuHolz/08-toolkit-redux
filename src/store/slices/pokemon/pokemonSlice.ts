import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
  page: number;
  pokemons: Array<{ name: string; url: string }>;
  isLoading: boolean;
}

const initialState: PokemonState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action: PayloadAction<{ pokemons: Array<{ name: string; url: string }>, page: number }>) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
