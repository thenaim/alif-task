export interface TaskStateModel {
  listData: {
    [userId: string]: Task;
  };
  isLoading: boolean;
  isLoadingSuccess: boolean;
  isLoadingFailure: boolean;
}
