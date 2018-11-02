import { Component, OnInit } from '@angular/core';
import { Selector } from 'angular-store';
import { usersInitialData, UsersData } from '../../store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Selector(usersInitialData.key) users: Observable<UsersData>;

  constructor() { }

  ngOnInit() {
  }

}
