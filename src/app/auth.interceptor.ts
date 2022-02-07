import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const apiBaseUrl='https://parseapi.back4app.com';
    request = request.clone({
      // setHeaders: { apiBaseUrl }
    });
    console.log(request);
    return next.handle(request);
  }
}
