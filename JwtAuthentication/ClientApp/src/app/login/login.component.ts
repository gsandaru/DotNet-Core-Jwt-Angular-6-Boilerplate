import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { LoginDto } from '../dtos/logindto'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {
  }

  logincreds: LoginDto = { Username: 'gihan', Password: 'Sandaru@1' };
  
  ngOnInit(): void {
   
    }


  loginUser() {
    this.loginService.getAuthToken(this.logincreds)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard'])
        },
        err => console.log(err)
    );
  }


   
}
