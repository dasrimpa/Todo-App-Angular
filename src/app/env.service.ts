import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  baseURL: string = '';
 
  constructor() { 
    this.baseURL = 'https://parseapi.back4app.com';
  }
  Api = {
     headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Parse-Application-Id': 'tsQEu2ydnrrLYEy0DM7sn9yXguje2o8ItfRZiAZt',
      'X-Parse-REST-API-Key': 'unAdWV97UJPbN4VI71CFreyFiABmtrm37ln2TJoQ',
    }),
  };
}


