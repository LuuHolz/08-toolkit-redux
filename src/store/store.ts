import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/index';
import { pokeomnSlice } from './slices/pokemon';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokeomnSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch