export interface IUsername {
  key: string;
  intialState: string;
}


export interface IUsers {
  key: string;
  intialState: string[];
}

export interface AppState {
  username: string;
  users: string[];
}
