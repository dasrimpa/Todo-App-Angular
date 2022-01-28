import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../interface/Todo';
 
@Injectable({providedIn:'root'})

export class ApiService {
  todoList: Todo[] = [
  ];
  baseURL: string = '';
 
  constructor(private http: HttpClient) {
    this.baseURL="https://parseapi.back4app.com";
  }

  Api = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      'Accept': 'application/json',
      'X-Parse-Application-Id':'tsQEu2ydnrrLYEy0DM7sn9yXguje2o8ItfRZiAZt',
      'X-Parse-REST-API-Key':'unAdWV97UJPbN4VI71CFreyFiABmtrm37ln2TJoQ'})
   };

  getTodoList(): Observable<Todo[]> {
    console.log('getTodoList '+this.baseURL + '/todo');
    return this.http.get<Todo[]>(this.baseURL + '/todo')
  }

  addTodo(value:Todo) {
    const result=JSON.stringify(value);
    console.log(result)
    return this.http.post(this.baseURL+'/classes/todo',value,this.Api);
  
}

  deleteTodo(id: string) {
    const headers = { 
      'content-type': 'application/json',
      'Accept': 'application/json',
      'X-Parse-Application-Id':'tsQEu2ydnrrLYEy0DM7sn9yXguje2o8ItfRZiAZt',
      'X-Parse-REST-API-Key':'unAdWV97UJPbN4VI71CFreyFiABmtrm37ln2TJoQ'}  
   
    return this.http.delete(`${this.baseURL}/${id}`, {'headers': headers});
  }
}