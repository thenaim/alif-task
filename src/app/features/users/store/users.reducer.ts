import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { UsersStateModel } from '../users.model';
import * as usersActions from './users.actions';

export const selectUsersState = createFeatureSelector<UsersStateModel>('users');

export const initialState: UsersStateModel = {
  listData: [],
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false,
};

const reducer = createReducer(
  initialState,

  on(usersActions.getUsers, (state) => ({ ...state, isLoading: true })),
  on(usersActions.getUsersSuccess, (state, result) => ({
    listData: result.response,
    isLoading: false,
    isLoadingSuccess: true,
  }))
);

export const usersReducer = (
  state: UsersStateModel | undefined,
  action: Action
): UsersStateModel => reducer(state, action);
