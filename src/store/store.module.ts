import { NgModule } from '@angular/core';
import { StoreModule } from 'angular-store';

import { UsernameReducer, UsersReducer } from './reducers';

const reducers = [
  UsernameReducer,
  UsersReducer
];

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { logger: false })
  ],
})
export class StoreNgModule { }
