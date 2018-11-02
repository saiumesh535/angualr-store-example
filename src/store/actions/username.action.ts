import { IDispatch } from 'angular-store';


export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const updateUsername = (payload: string): IDispatch<string> => ({
  type: UPDATE_USERNAME,
  payload
});
