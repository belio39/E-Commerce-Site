import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';

import { AuthService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
    console.log(authService.getToken());
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.getToken() || '';

    const tokenizedRequest = req.clone({
      headers: req.headers.set('token', token),
    });

    return next.handle(tokenizedRequest).pipe(
      catchError((err) => {
        const error = err.error.message || 'Failed. Try again later';

        return throwError(error);
      })
    );
  }
}
