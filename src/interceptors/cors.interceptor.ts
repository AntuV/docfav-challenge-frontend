import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

/**
 * Interceptor to force the use of CORS in HTTP requests.
 * 
 * If the HTTP request fails with a 403 error, the user is redirected to the CORS Anywhere page
 * to request authorization.
 */
@Injectable()
export class CorsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({ url: `https://cors-anywhere.herokuapp.com/${req.url}` });

    return next.handle(apiReq).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 403) {
          alert('Debe solicitar autorización para utilizar servicio de CORS Anywhere. Será redirigido a https://cors-anywhere.herokuapp.com/corsdemo')
          window.location.href = 'https://cors-anywhere.herokuapp.com/corsdemo';
        }
        return throwError(() => err);
      })
    );
  }
}