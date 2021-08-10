import { createSelector } from '@ngrx/store';
import { selectRouteParams } from '../../../core/store/router/router.selectors';
import { urlTaskParamKey } from '../task.constant';
import { TaskStateModel } from '../task.model';
import { selectTaskState } from './task.reducer';

export const selectTaskIdParam = createSelector(
  selectRouteParams,
  (params) => params[urlTaskParamKey]
);

export const selectTask = createSelector(
  selectTaskState,
  selectTaskIdParam,
  (taskState: TaskStateModel, taskId: number) => taskState.listData[taskId]
);

export const selectTaskIsLoading = createSelector(
  selectTaskState,
  (state: TaskStateModel) => state.isLoading
);

export const selectTaskIsLoadingSuccess = createSelector(
  selectTaskState,
  (state: TaskStateModel) => state.isLoadingSuccess
);

export const selectTaskIsLoadingFailure = createSelector(
  selectTaskState,
  (state: TaskStateModel) => state.isLoadingFailure
);
