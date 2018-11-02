import { Component } from '@angular/core';
import { Store } from 'angular-store';
import { updateUsername, addUser } from '../store/actions';
import { AppState } from 'src/store/types';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public username: string;

  title = 'angularstoreperf';
  constructor(private store: Store) {
    /* getting  state from store */
    console.log('store', this.store.getSnapShot<AppState>());
  }

  /* updating username in store */
  public onUsernameUpdate(username: string): void {
    this.store.dispatch(updateUsername(username));
  }

  public addUsername(username: string): void {
    this.store.dispatch(addUser(username));
    this.username = '';
  }

}
