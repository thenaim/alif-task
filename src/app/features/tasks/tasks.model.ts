import { User } from '../users/users.model';

export interface Task {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
  username: string | undefined;
}

export interface TasksStateModel {
  listData: Task[];
  search: string;
  isLoading: boolean;
  isLoadingSuccess: boolean;
  isLoadingFailure: boolean;
}
