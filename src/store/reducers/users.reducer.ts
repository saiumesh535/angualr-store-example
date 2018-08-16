import { Reducer, Action, IState } from 'angular-store';
import { IUsers, AppState } from '../types';
import { ADD_USER } from '../actions';



export const users: IUsers = {
  key: 'users',
  initialState: []
};


@Reducer(users)
export class UsersReducer {
  constructor() { }

  @Action(ADD_USER)
  public addUser(payload: string, state: IState) {
    const currentState = state.getState() as AppState;
    const updateUSers = [...currentState.users, payload];
    state.updateState({ key: users.key, payload: updateUSers });
  }

}
