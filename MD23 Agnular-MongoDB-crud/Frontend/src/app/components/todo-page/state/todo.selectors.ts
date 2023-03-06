import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Animal } from 'src/app/service/api.service';
 
export const selectTodo = createFeatureSelector<Animal[]>('todo');