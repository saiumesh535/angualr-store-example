import { Reducer, Action, IState } from 'angular-store';
import { IUsername } from '../types';
import { UPDATE_USERNAME } from '../actions';


const username: IUsername = {
  key: 'username',
  initialState: ''
};


@Reducer(username)
export class UsernameReducer {
  constructor() { }

  @Action(UPDATE_USERNAME)
  public updateUsername(payload: string, state: IState) {
    state.updateState({ key: username.key, payload });
  }

}
