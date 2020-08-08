import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week4tut';
  isLoggedIn:boolean = false;

  constructor(private route: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('user')) {
      this.isLoggedIn = true;
    }

    this.loginService.loggedIn.subscribe(response => {
      this.isLoggedIn = response;
    });
  }

  ngOnDestroy(): void {
    this.isLoggedIn = false;
  }

  logout() {
    sessionStorage.removeItem('user');
    this.loginService.loggedIn.next(false);
    this.route.navigateByUrl('login')
  }
}

