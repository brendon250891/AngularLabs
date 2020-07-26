import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user/';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  subscription: Subscription;
  user:User;


  constructor(private route: Router) { }

  ngOnInit(): void {
    let storedUser = sessionStorage.getItem('user');
    if (storedUser == null) {
      this.route.navigateByUrl('login');
    }

    this.user = JSON.parse(storedUser);
  }

  ngOnDestroy(): void {
      
  }
}
