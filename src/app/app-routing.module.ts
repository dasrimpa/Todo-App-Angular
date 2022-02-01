import { TodoDisplay } from './todo-display/todo-display.component';
import { TodoCreate } from './todo-create/todo-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'addtodo', component: TodoCreate },
  { path: 'displaytodo', component: TodoDisplay },
  {path: 'edit/:objectId', component: TodoCreate}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
