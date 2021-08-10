import { createAction, props } from '@ngrx/store';

export const GET_USER = '[User] Get User';
export const GET_USER_SUCCESS = '[User] Get User Success';
export const GET_USER_FAILURE = '[User] Get User Failure';

export const getUserAction = createAction(GET_USER);
export const getUserSuccessAction = createAction(
  GET_USER_SUCCESS,
  props<any>()
);
export const getUserFailureAction = createAction(
  GET_USER_FAILURE,
  props<any>()
);
