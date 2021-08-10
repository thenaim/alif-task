import { createSelector } from '@ngrx/store';
import { selectRouteParams } from '../../../core/store/router/router.selectors';
import { urlUserParamKey } from '../user.constant';
import { UserStateModel } from '../user.model';
import { selectUserState } from './user.reducer';

export const selectUserIdParam = createSelector(
  selectRouteParams,
  (params) => params[urlUserParamKey]
);

export const selectUser = createSelector(
  selectUserState,
  selectUserIdParam,
  (userState: UserStateModel, userId: number) => userState.listData[userId]
);

export const selectUserIsLoading = createSelector(
  selectUserState,
  (state: UserStateModel) => state.isLoading
);

export const selectUserIsLoadingSuccess = createSelector(
  selectUserState,
  (state: UserStateModel) => state.isLoadingSuccess
);

export const selectUserIsLoadingFailure = createSelector(
  selectUserState,
  (state: UserStateModel) => state.isLoadingFailure
);
