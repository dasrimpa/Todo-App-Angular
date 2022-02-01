import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Todo } from '../interface/Todo';
 
@Injectable({providedIn:'root'})

export class ApiService {
  baseURL: string = '';
  objectId: string |undefined;
 
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
    return this.http.get(this.baseURL + '/classes/todo',this.Api)
    .pipe(
      map((data: any) => data.results),
      map((list: Array<any>) => list.map(i => {
        delete i.createdAt;
        return i;
      }))
    );
  }
  getTodo(objectId:string) {
    return this.http.get(this.baseURL + `/classes/todo/${objectId}`,this.Api);
   
  }

  addTodo(title:string) {
    return this.http.post(this.baseURL+'/classes/todo',title,this.Api).subscribe
    (data=>console.log(JSON.stringify(data)));
    
}

  deleteTodo(objectId:string) {
    return this.http.delete(this.baseURL+`/classes/todo/${objectId}`, this.Api);
  
  }
  updateTodo(objectId:string ) {
    return this.http.put(this.baseURL+`/classes/todo/${objectId}`,this.Api).subscribe
    (data=>console.log(JSON.stringify(data)));
  }
}
