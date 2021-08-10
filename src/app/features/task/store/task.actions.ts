import { createAction, props } from '@ngrx/store';
import { Task } from '../../tasks/tasks.model';

export const GET_TASK = '[Task] Get Task';
export const GET_TASK_SUCCESS = '[Task] Get Task Success';
export const GET_TASK_FAILURE = '[Task] Get Task Failure';

export const getTaskAction = createAction(GET_TASK);
export const getTaskSuccessAction = createAction(
  GET_TASK_SUCCESS,
  props<{ payload: Task }>()
);
export const getTaskFailureAction = createAction(
  GET_TASK_FAILURE,
  props<any>()
);
