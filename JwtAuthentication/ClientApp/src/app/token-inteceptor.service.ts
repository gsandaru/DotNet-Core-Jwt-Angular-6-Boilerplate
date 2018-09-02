import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInteceptorService implements HttpInterceptor {
    
  newreq: any;

  constructor(private injector: Injector) { }

  getToken() { return localStorage.getItem('token'); }
   
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.getToken()) {
      this.newreq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.getToken()}`
        }
      });
    }
    
    return next.handle(this.newreq);
  }
}
