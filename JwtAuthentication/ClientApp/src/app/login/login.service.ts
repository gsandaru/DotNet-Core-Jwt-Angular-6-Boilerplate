import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { LoginDto } from '../dtos/logindto';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  getAuthToken(logindto: LoginDto) {
    return this.http.post("/api/auth/login", logindto)
      .map(data => data.json());
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

