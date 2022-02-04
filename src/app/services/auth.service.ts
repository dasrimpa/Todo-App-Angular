import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  baseURL: string = '';
  public user :any;

  constructor(private http: HttpClient) {
    this.baseURL = 'https://parseapi.back4app.com';

    const user=localStorage.getItem('user');
    if(user){
      this.user = user ? JSON.parse(user) : null;
    }
  }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Parse-Application-Id': 'tsQEu2ydnrrLYEy0DM7sn9yXguje2o8ItfRZiAZt',
      'X-Parse-REST-API-Key': 'unAdWV97UJPbN4VI71CFreyFiABmtrm37ln2TJoQ',
    }),
  };

  register(username: string, password: string): Observable<any> {
    return this.http.post(
      this.baseURL + '/users',
      {
        username,
        password,
      },
      this.headers
    );
  }
  login(username: string, password: string) {
    return this.http.post(
      this.baseURL + '/login',
      {
        username: username,
        password: password,
      },
      this.headers
    );
  }
  getUser(){
    return this.http.get(this.baseURL +'/users',this.headers).pipe(
      map((data: any) => data.results),
      tap(data=>console.log(data)),
      tap(data=>localStorage.setItem('user',JSON.stringify(data))),
    );
  }
}
