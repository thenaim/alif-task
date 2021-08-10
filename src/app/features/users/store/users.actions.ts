import { createAction, props } from '@ngrx/store';
import { User } from '../users.model';

export const GET_USERS = '[Users] Get Users';
export const GET_USERS_SUCCESS = '[Users] Get Users Success';
export const GET_USERS_FAILURE = '[Users] Get Users Failure';

export const CREATE_USER = '[Users] Create User';
export const CREATE_USER_SUCCESS = '[Users] Create User Success';
export const CREATE_USER_FAILURE = '[Users] Create User Failure';

export const DELETE_USER = '[Users] Delete User';
export const DELETE_USER_SUCCESS = '[Users] Delete User Success';
export const DELETE_USER_FAILURE = '[Users] Delete User Failure';

export const EDIT_USER = '[Users] Edit User';
export const EDIT_USER_SUCCESS = '[Users] Edit User Success';
export const EDIT_USER_FAILURE = '[Users] Edit User Failure';

export const getUsers = createAction(GET_USERS);

export const getUsersSuccess = createAction(
  GET_USERS_SUCCESS,
  props<{ payload: User[] }>()
);

export const getUsersFailure = createAction(GET_USERS_FAILURE, props<any>());

export const createUser = createAction(CREATE_USER, props<any>());

export const createUserSuccess = createAction(
  CREATE_USER_SUCCESS,
  props<any>()
);

export const createUserFailure = createAction(
  CREATE_USER_FAILURE,
  props<any>()
);

export const deleteUser = createAction(DELETE_USER, props<any>());

export const deleteUserSuccess = createAction(
  DELETE_USER_SUCCESS,
  props<any>()
);

export const deleteUserFailure = createAction(
  DELETE_USER_FAILURE,
  props<any>()
);

export const editUser = createAction(EDIT_USER, props<any>());

export const editUserSuccess = createAction(EDIT_USER_SUCCESS, props<any>());

export const editUserFailure = createAction(EDIT_USER_FAILURE, props<any>());
