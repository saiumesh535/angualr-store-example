import { UsersData } from './reducers';

export interface IUsername {
  key: string;
  initialState: string;
}


export interface IUsers {
  key: string;
  initialState: string[];
}

export interface AppState {
  username: string;
  users: UsersData[];
}
