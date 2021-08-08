import { UsersStateModel } from '../../features/users/users.model';
import { TasksStateModel } from '../../features/tasks/tasks.model';

export interface AppState {
  tasks: TasksStateModel;
  users: UsersStateModel;
}
