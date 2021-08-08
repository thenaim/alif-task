import { createAction, props } from '@ngrx/store';

export const GET_USERS = '[User] Get Users';
export const GET_USERS_SUCCESS = '[User] Get Users Success';
export const GET_USERS_FAILURE = '[User] Get Users Failure';

export const CREATE_USER = '[User] Create User';
export const CREATE_USER_SUCCESS = '[User] Create User Success';
export const CREATE_USER_FAILURE = '[User] Create User Failure';

export const DELETE_USER = '[User] Delete User';
export const DELETE_USER_SUCCESS = '[User] Delete User Success';
export const DELETE_USER_FAILURE = '[User] Delete User Failure';

export const EDIT_USER = '[User] Edit User';
export const EDIT_USER_SUCCESS = '[User] Edit User Success';
export const EDIT_USER_FAILURE = '[User] Edit User Failure';

export const getUsers = createAction(GET_USERS);

export const getUsersSuccess = createAction(GET_USERS_SUCCESS, props<any>());

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
