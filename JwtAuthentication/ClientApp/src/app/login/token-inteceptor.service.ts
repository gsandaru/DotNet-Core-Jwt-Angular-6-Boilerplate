import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { LoginService } from './login.service';


@Injectable()
export class TokenInteceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let loginService = this.injector.get(LoginService);    
    if (loginService.isLoggedIn) {
      const newRequest = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('token'))
      })
      return next.handle(newRequest)
        .do(succ => console.log(succ), err => console.log(err));
    } 
    return next.handle(req).do(succ => console.log(succ), err => console.log(err)); 
  }  
    
} 
