import { Component, OnInit, ɵReflectionCapabilities } from '@angular/core';
import { Router } from '@angular/router';
import { MockAccountDatabase, Account } from '../database/';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = "";
  message:string = "";
  account:Account = null;

  constructor(private route:Router, private database: MockAccountDatabase) {
  }

  ngOnInit(): void {
  }

  login(): void {
      if (this.validInput()) {
        this.account = this.database.authenticate(this.email, this.password);
        if (!this.account.isEmpty()) {
            console.log(this.account.isEmpty());
            this.route.navigateByUrl('/account/' + this.account.getId());
        } else {
            this.message = "Invalid Credentials Were Given"
            this.resetFields();
        }
      } else {
        this.message = "Email and Password are Required to Login";
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