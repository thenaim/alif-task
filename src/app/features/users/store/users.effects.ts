import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  map,
  exhaustMap,
  catchError,
  filter,
  withLatestFrom,
  mergeMap,
} from 'rxjs/operators';
import { ApiService } from '../../../core/services/api/api.service';
import * as usersAction from './users.actions';
import { apiUsersUrls } from '../users.constant';
import { selectUsers } from './users.selectors';
import { Store } from '@ngrx/store';

@Injectable()
export class UsersEffects {
  constructor(
    private store: Store,
    private actions$: Actions,
    private apiService: ApiService
  ) {}

  getusers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersAction.getUsers),
      withLatestFrom(this.store.select(selectUsers)),
      mergeMap(([action, users]) => {
        if (!users.length) {
          return this.apiService.get(apiUsersUrls).pipe(
            map((response) => usersAction.getUsersSuccess({ response })),
            catchError((error: any) => of(usersAction.getUsersFailure(error)))
          );
        }
        return of(usersAction.getUsersSuccess({ response: users }));
      })
    )
  );
}
