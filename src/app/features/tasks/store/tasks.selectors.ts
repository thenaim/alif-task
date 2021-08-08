import { createSelector } from '@ngrx/store';
import { selectUsersState } from '../../users/store/users.reducer';
import { UsersStateModel } from '../../users/users.model';
import { TasksStateModel } from '../tasks.model';
import { selectTasksState } from './tasks.reducer';

export const selectTasks = createSelector(
  [selectTasksState, selectUsersState],
  (tasks: TasksStateModel, users: UsersStateModel) => {
    const tasksList = tasks.listData.map((task) => ({
      ...task,
      username: users.listData.find((user) => user.id === task.userId)?.name,
    }));
    if (tasks.search) {
      return tasksList.filter((taskFilter) =>
        taskFilter.title.toLowerCase().includes(tasks.search)
      );
    }
    return tasksList;
  }
);

export const selectTasksIsLoading = createSelector(
  selectTasksState,
  (state: TasksStateModel) => state.isLoading
);

export const selectTasksIsLoadingSuccess = createSelector(
  selectTasksState,
  (state: TasksStateModel) => state.isLoadingSuccess
);

export const selectTasksIsLoadingFailure = createSelector(
  selectTasksState,
  (state: TasksStateModel) => state.isLoadingFailure
);

export const selectTasksLastId = createSelector(
  selectTasksState,
  (state: TasksStateModel) => state.listData[state.listData.length - 1].id
);
