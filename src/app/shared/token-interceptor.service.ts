import { Injectable } from '@angular/core';
//import { ErrorDialogService } from '../error-dialog/errordialog.service';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

      intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        if(localStorage.getItem('currentUser')!=null){
            const token: string = JSON.parse(localStorage.getItem('currentUser')).token;

            if (token) {
                request = request.clone({ headers: request.headers.set('Authorization',  token) });
            }
        }
        // if (!request.headers.has('Content-Type')) {
        //     request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        // }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    //console.log('event--->>>', event);
                }
                return event;
            }));
    }
}
