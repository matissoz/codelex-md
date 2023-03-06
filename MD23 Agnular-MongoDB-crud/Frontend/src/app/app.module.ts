import { Animal } from './../../../Backend/src/models/animal';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { SwitchComponent } from './components/switch/switch.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AnimalPageComponent } from './components/animal-page/animal-page.component';
import { TodoPageComponent } from './components/todo-page/todo-page.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './components/todo-page/state/todo.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    SwitchComponent,
    PageNotFoundComponent,
    AnimalPageComponent,
    TodoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ todo: todoReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
