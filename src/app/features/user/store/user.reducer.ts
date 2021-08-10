import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { UserStateModel } from '../user.model';
import {
  getUserAction,
  getUserFailureAction,
  getUserSuccessAction,
} from './user.actions';

export const selectUserState = createFeatureSelector<UserStateModel>('user');

export const initialState: UserStateModel = {
  listData: {},
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false,
};

const reducer = createReducer(
  initialState,

  on(getUserAction, (state) => ({
    ...state,
    isLoading: true,
    isLoadingSuccess: false,
    isLoadingFailure: false,
  })),
  on(getUserSuccessAction, (state, result) => ({
    listData: {
      ...state.listData,
      [result.payload.id]: result.payload,
    },
    isLoading: false,
    isLoadingSuccess: true,
    isLoadingFailure: false,
  })),
  on(getUserFailureAction, (state) => ({
    ...state,
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingFailure: true,
  }))
);

export const userReducer = (
  state: UserStateModel | undefined,
  action: Action
): UserStateModel => reducer(state, action);
