import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

interface User {
  username:string;
  birthdate:string;
  age:number;
  email:string;
  avatar:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  url = "http://localhost:3000/api/auth"
  email:string = "";
  password:string = "";
  message:string = "";
  response = null;

  constructor(private route:Router, private http: HttpClient, private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  login(): void {
      if (this.validInput()) {
        this.http.post<User>(this.url, { email: this.email, password: this.password }, httpOptions).subscribe(
          response => {
            sessionStorage.setItem('user', JSON.stringify(response));
            this.loginService.loggedIn.emit(true);

            this.route.navigateByUrl('account');
          },
          (error: HttpErrorResponse) => {
            this.message = error.error;
            this.resetFields();
          }
        );
      } else {
        this.message = "Email and Password are Required to Login";
        this.resetFields();
      }
  }

  validInput():boolean {
      return this.email != "" || this.password != "";
  }

  resetFields() {
      this.email = "";
      this.password = "";
  }
}