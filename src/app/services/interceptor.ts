import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Parse-Application-Id': 'tsQEu2ydnrrLYEy0DM7sn9yXguje2o8ItfRZiAZt',
        'X-Parse-REST-API-Key': 'unAdWV97UJPbN4VI71CFreyFiABmtrm37ln2TJoQ',
      },
    });
    return next.handle(request);
  }
}
