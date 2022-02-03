import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  baseURL: string = '';

  constructor(private http: HttpClient) {
    this.baseURL = 'https://parseapi.back4app.com';
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
}
