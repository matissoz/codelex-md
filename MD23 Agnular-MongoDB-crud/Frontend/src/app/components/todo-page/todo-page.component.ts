import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Animal, ApiService, NewAnimalType } from 'src/app/service/api.service';
import { todoApiActions } from './state/todo.actions';
import { selectTodo } from './state/todo.selectors';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent {
  todo$ = this.store.select(selectTodo);
 
  constructor(private _api: ApiService, private store: Store) {}
 
  ngOnInit() {
    this._api
      .getDataTodo()
      .subscribe((todo) =>{
        this.store.dispatch(todoApiActions.retrievedTodoList({ todo }))});
      
  }

  delete(_id:string) {
    this._api.deleteAnimal(_id).subscribe()
    this.store.dispatch(todoApiActions.deleteTodo({ _id }));
  }

  add(newAnimal: NewAnimalType) {
    this._api.addAnimal(newAnimal).subscribe()
    this.store.dispatch(todoApiActions.addTodo({ newAnimal }));
  }
}


