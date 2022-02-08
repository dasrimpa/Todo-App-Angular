import { TodoDisplay } from './todo-display/todo-display.component';
import { TodoCreate } from './todo-create/todo-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthGuard } from './auth/Auth-Guard/auth-guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

const routes: Routes = [
  { path: 'add-todo', component: TodoCreate, canActivate: [AuthGuard],data: { breadcrumb: 'Home'} },
  { path: 'display-todo', component: TodoDisplay, canActivate: [AuthGuard] },
  { path: 'edit/:objectId', component: TodoCreate, canActivate: [AuthGuard] },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,  
      useClass:  AuthInterceptor,  
      multi: true } ],
})
export class AppRoutingModule {}
