import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { tasksReducer } from '../../features/tasks/store/tasks.reducer';
import { environment } from '../../../environments/environment';
import { debug } from '../meta-reducers/debug.reducer';
import { AppState } from './store.state.model';
import { usersReducer } from '../../features/users/store/users.reducer';
import { userReducer } from '../../features/user/store/user.reducer';
import { taskReducer } from '../../features/task/store/task.reducer';

export const reducers: ActionReducerMap<AppState> = {
  tasks: tasksReducer,
  task: taskReducer,
  users: usersReducer,
  user: userReducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];

if (!environment.production) {
  metaReducers.unshift(debug);
}
