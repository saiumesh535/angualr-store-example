import { IDispatch } from 'angular-store';


export const ADD_USER = 'ADD_USER';
export const addUser = (payload: string): IDispatch<string> => ({
  type: ADD_USER,
  payload
});
