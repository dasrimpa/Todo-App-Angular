import { TodoCreate } from './todo-create/todo-create.component';
import { TodoList } from './TodoComponent/todo.list';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'addtodo', component: TodoCreate },
  { path: 'listtodo', component: TodoList },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
