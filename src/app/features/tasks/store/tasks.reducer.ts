import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { TasksStateModel } from '../tasks.model';
import * as taskActions from './tasks.actions';

export const selectTasksState = createFeatureSelector<TasksStateModel>('tasks');

export const initialState: TasksStateModel = {
  listData: [],
  search: '',
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false,
};

const reducer = createReducer(
  initialState,

  // Get tasks
  on(taskActions.getTasks, (state) => ({
    ...state,
    isLoading: true,
    isLoadingSuccess: false,
    isLoadingFailure: false,
  })),
  on(taskActions.getTasksSuccess, (state, result) => ({
    ...state,
    listData: result.response,
    isLoading: false,
    isLoadingSuccess: true,
    isLoadingFailure: false,
  })),
  on(taskActions.getTasksFailure, (state, result) => ({
    ...state,
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingFailure: true,
  })),

  // Create tasks
  on(taskActions.createTask, (state) => ({ ...state })),
  on(taskActions.createTaskSuccess, (state, result) => ({
    ...state,
    listData: [...state.listData, result.payload],
  })),
  on(taskActions.createTaskFailure, (state, result) => ({ ...state })),

  // Edit tasks
  on(taskActions.editTask, (state, result) => ({
    ...state,
    listData: state.listData.map((task) => {
      if (task.id === result.payload.id) {
        return { ...task, ...result.payload };
      }
      return task;
    }),
  })),
  on(taskActions.editTaskSuccess, (state, result) => ({ ...state })),
  on(taskActions.editTaskFailure, (state, result) => ({ ...state })),

  // Delete tasks
  on(taskActions.deleteTask, (state, result) => ({
    ...state,
    listData: state.listData.filter((task) => task.id !== result.payload.id),
  })),

  // Search tasks
  on(taskActions.searchTask, (state, result) => ({
    ...state,
    search: result.payload.search,
  }))
);

export const tasksReducer = (
  state: TasksStateModel | undefined,
  action: Action
): TasksStateModel => reducer(state, action);
