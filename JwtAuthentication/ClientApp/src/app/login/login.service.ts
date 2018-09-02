import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoginDto } from '../dtos/logindto';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  getAuthToken(logindto: LoginDto) {
    return this.http.post("/api/auth/login", logindto).map(data => data.json());
  }


  isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}

