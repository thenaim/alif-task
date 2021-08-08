import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { tasksReducer } from '../../features/tasks/store/tasks.reducer';
import { environment } from '../../../environments/environment';
import { debug } from '../meta-reducers/debug.reducer';
import { AppState } from './store.state.model';
import { usersReducer } from '../../features/users/store/users.reducer';

export const reducers: ActionReducerMap<AppState> = {
  tasks: tasksReducer,
  users: usersReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];

if (!environment.production) {
  metaReducers.unshift(debug);
}
