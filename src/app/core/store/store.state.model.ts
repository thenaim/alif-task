import { RouterReducerState } from '@ngrx/router-store';
import { UsersStateModel } from '../../features/users/users.model';
import { TasksStateModel } from '../../features/tasks/tasks.model';
import { RouterStateUrl } from '../router/serializer/router.serializer';
import { UserStateModel } from '../../features/user/user.model';
import { TaskStateModel } from '../../features/task/task.model';

export interface AppState {
  tasks: TasksStateModel;
  task: TaskStateModel;
  users: UsersStateModel;
  user: UserStateModel;
  router: RouterReducerState<RouterStateUrl>;
}
