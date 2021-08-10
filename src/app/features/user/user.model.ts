import { User } from '../users/users.model';

export interface UserStateModel {
  listData: {
    [userId: string]: User;
  };
  isLoading: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
}
