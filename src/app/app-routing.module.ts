import { HomePage } from './TodoComponent/HomePage/todo.home';
import { TodoList } from './TodoComponent/todo.list';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './TodoComponent/todo.component';

const routes: Routes = [
  { path: 'addtodo', component: TodoComponent },
  { path: 'listtodo', component: TodoList },
  { path: 'homepage', component: HomePage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
