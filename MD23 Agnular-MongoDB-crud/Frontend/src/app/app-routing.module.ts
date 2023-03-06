import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalPageComponent } from './components/animal-page/animal-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TodoPageComponent } from './components/todo-page/todo-page.component';

const routes: Routes = [
  {path: "animals", component: AnimalPageComponent},
  {path: "todo", component: TodoPageComponent},
  { path: '',   redirectTo: '/animals', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
