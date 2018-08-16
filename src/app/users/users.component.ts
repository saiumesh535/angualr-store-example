import { Component, OnInit } from '@angular/core';
import { Selector } from 'angular-store';
import { users } from '../../store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Selector(users.key) users: Observable<string[]>;

  constructor() { }

  ngOnInit() {
  }

}
