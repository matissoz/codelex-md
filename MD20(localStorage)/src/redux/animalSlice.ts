import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
export type Animal ={
    id: string,
    name: string,
    image: string,
    breed: string,
}

type AnimalState = {
  animals: Animal[],
  searchAnimals: Animal[]
}

// Define the initial state using that type
const initialState:AnimalState = {
  animals: [],
  searchAnimals: []
}

export const animalSlice = createSlice({
  name: 'animalSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAllAnimals: (state, {payload}: PayloadAction<Animal[]>) => {
        state.animals = payload;
        state.searchAnimals = payload;
    },
    setDeleteAnimal: (state, {payload}: PayloadAction<Animal>) => {
      state.animals = state.animals.filter(animal => animal.id !== payload.id);
    },
    setAddAnimal: (state, {payload}: PayloadAction<Animal>) => {
      state.animals = [...state.animals, payload];
    },
    setSearchByBreed: (state, {payload}: PayloadAction<string>) => {
      state.searchAnimals = state.animals.filter(animal => animal.breed.includes(payload));
    },
  },
})

export const { setAllAnimals,setDeleteAnimal, setAddAnimal, setSearchByBreed } = animalSlice.actions

export default animalSlice.reducer