import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { TaskStateModel } from '../task.model';
import {
  getTaskAction,
  getTaskFailureAction,
  getTaskSuccessAction,
} from './task.actions';

export const selectTaskState = createFeatureSelector<TaskStateModel>('task');

export const initialState: TaskStateModel = {
  listData: {},
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false,
};

const reducer = createReducer(
  initialState,

  on(getTaskAction, (state) => ({
    ...state,
    isLoading: true,
    isLoadingSuccess: false,
    isLoadingFailure: false,
  })),
  on(getTaskSuccessAction, (state, result) => ({
    listData: {
      ...state.listData,
      [result.payload.id]: result.payload,
    },
    isLoading: false,
    isLoadingSuccess: true,
    isLoadingFailure: false,
  })),
  on(getTaskFailureAction, (state, _) => ({
    ...state,
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingFailure: true,
  }))
);

export const taskReducer = (
  state: TaskStateModel | undefined,
  action: Action
): TaskStateModel => reducer(state, action);
