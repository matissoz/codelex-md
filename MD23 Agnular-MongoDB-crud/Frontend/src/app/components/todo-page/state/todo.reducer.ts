import { createReducer, on } from '@ngrx/store';
import { Animal, NewAnimalType } from 'src/app/service/api.service';
import { todoApiActions } from './todo.actions';

export const initialState: Animal[] | NewAnimalType[] = [];

export const todoReducer = createReducer(
  initialState,
  on(todoApiActions.retrievedTodoList, (_state, { todo }) => todo),
  on(todoApiActions.deleteTodo, (state, { _id }) =>{
    return state.filter((animal) => animal._id !== _id);
  }),
  on(todoApiActions.addTodo, (state, { newAnimal }) => [...state, newAnimal]),
);