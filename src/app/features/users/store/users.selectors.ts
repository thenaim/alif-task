import { createSelector } from '@ngrx/store';
import { UsersStateModel } from '../users.model';
import { selectUsersState } from './users.reducer';

export const selectUsers = createSelector(
  selectUsersState,
  (state: UsersStateModel) => state.listData
);

export const selectUsersIsLoading = createSelector(
  selectUsersState,
  (state: UsersStateModel) => state.isLoading
);

export const selectUsersIsLoadingSuccess = createSelector(
  selectUsersState,
  (state: UsersStateModel) => state.isLoadingSuccess
);

export const selectUsersIsLoadingFailure = createSelector(
  selectUsersState,
  (state: UsersStateModel) => state.isLoadingFailure
);
