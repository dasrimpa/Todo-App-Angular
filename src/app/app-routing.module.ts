import { SignupComponent } from './auth/signup/signup.component';
import { TodoDisplay } from './todo-display/todo-display.component';
import { TodoCreate } from './todo-create/todo-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'add-todo', component: TodoCreate },
  { path: 'display-todo', component: TodoDisplay },
  {path: 'edit/:objectId', component: TodoCreate},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
