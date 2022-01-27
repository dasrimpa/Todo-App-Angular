import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../interface/Todo';
 
@Injectable({providedIn:'root'})

export class ApiService {
 
baseURL: string = "https://parseapi.back4app.com/";
 
  constructor(private http: HttpClient) {
  }
 
  getTodoList(): Observable<Todo[]> {
    console.log('getTodoList '+this.baseURL + 'todo')
    return this.http.get<Todo[]>(this.baseURL + 'todo')
  }
 
  addTodo(value:Todo): Observable<any> {
    const headers = { 
    'content-type': 'application/json',
    'Accept': 'application/json',
    'X-Parse-Application-Id':'tsQEu2ydnrrLYEy0DM7sn9yXguje2o8ItfRZiAZt',
    'X-Parse-REST-API-Key':'unAdWV97UJPbN4VI71CFreyFiABmtrm37ln2TJoQ'}  

    const result=JSON.stringify(value);
    console.log(result)
    return this.http.post(this.baseURL + 'todo', result,{'headers':headers})
  }
 
}