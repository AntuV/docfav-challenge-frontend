import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

/**
 * Interceptor para forzar el uso de CORS en peticiones HTTP.
 * 
 * Si la petición HTTP falla con un error 403, se redirige al usuario a la página de CORS Anywhere para
 * solicitar autorización.
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