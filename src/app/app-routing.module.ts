import { TodoDisplay } from './todo-display/todo-display.component';
import { TodoCreate } from './todo-create/todo-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'add-todo', component: TodoCreate },
  { path: 'display-todo', component: TodoDisplay },
  {path: 'edit/:objectId', component: TodoCreate},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
