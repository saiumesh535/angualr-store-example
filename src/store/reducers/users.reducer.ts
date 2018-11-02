import { Reducer, Action, IState, IReducer } from 'angular-store';
import { IUsers, AppState } from '../types';
import { ADD_USER } from '../actions';


export interface UsersData {
  username: string;
  timeStamp: number;
}

export const usersInitialData: IReducer<UsersData[]> = {
  key: 'users',
  initialState: []
};


@Reducer<UsersData[]>(usersInitialData)
export class UsersReducer {
  constructor() { }

  @Action(ADD_USER)
  public addUser(username: string, state: IState) {
    const currentState = state.getState<AppState>();
    const users: UsersData = {
      username,
      timeStamp: Date.now()
    };
    const updatedUsers = [...currentState.users, users];
    state.updateState<UsersData[]>({ key: usersInitialData.key, payload: updatedUsers });
  }

}
