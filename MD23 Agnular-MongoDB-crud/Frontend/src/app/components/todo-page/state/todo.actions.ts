import { NewAnimalType } from './../../../service/api.service';
import { createActionGroup, props } from '@ngrx/store';
import { Animal } from 'src/app/service/api.service';

export const todoApiActions = createActionGroup({
    source: 'todo API',
    events: {
      'Retrieved Todo List': props<{ todo: Animal[] }>(),
      'Delete Todo': props<{ _id: string }>(),
      'Add Todo': props<{ newAnimal: NewAnimalType }>(),
    },
  });