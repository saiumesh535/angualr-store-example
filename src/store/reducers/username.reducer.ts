import { Reducer, Action, IState, IReducer } from 'angular-store';
import { IUsername, AppState } from '../types';
import { UPDATE_USERNAME, ADD_USER } from '../actions';


const username: IReducer<string> = {
  key: 'username',
  initialState: ''
};


@Reducer<string>(username)
export class UsernameReducer {
  constructor() { }

  @Action(UPDATE_USERNAME)
  public updateUsername(payload: string, { getState, updateState }: IState) {
    const state = getState<AppState>();
    updateState({ key: username.key, payload });
  }

  // multi action
  @Action([UPDATE_USERNAME, ADD_USER ])
  public onMultiUpdate(payload: string, state: IState) {
    console.log('both changes!!', payload);
  }

}
