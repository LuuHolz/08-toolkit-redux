import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  counter: number
}

const initialState: CounterState = {
  counter: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {

      state.counter += 1
    },
    decrement: (state) => {

      state.counter -= 1
    },
    incrementBy2: (state) => {

      state.counter += 2
    },
    
  },
})

export const { increment, decrement, incrementBy2 } = counterSlice.actions;

