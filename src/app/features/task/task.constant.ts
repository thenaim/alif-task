import { environment } from '../../../environments/environment';

export const apiTaskUrl = (taskId: number) =>
  `${environment.apiUrl}/todos/${taskId}`;
export const urlTaskParamKey = 'taskId';
