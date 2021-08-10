import { environment } from '../../../environments/environment';

export const apiUserUrl = (userId: number) =>
  `${environment.apiUrl}/users/${userId}`;
export const urlUserParamKey = 'userId';
