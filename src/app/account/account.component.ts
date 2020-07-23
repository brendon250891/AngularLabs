import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MockAccountDatabase, Account } from '../database';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  subscription: Subscription;
  account: Account = new Account();

  constructor(private route: ActivatedRoute, private database: MockAccountDatabase) { }

  ngOnInit(): void {
      this.subscription = this.route.paramMap.subscribe(param => {
          console.log(param.get('id'));
          this.account = this.database.getAccount(parseInt(param.get('id')));
          console.log(this.account);
      });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
