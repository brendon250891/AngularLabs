import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:User = null;

  constructor(private route: Router) { }

  ngOnInit(): void {
    let currentUser = sessionStorage.getItem('user');
    if (currentUser == null) {
      this.route.navigateByUrl('login');
    }

    this.user = JSON.parse(currentUser) as User;
  }

  save(): void {
    sessionStorage.setItem('user', JSON.stringify(this.user));

    this.route.navigateByUrl('account');
  }

  cancel(): void {
    this.route.navigateByUrl('account');
  }
}
