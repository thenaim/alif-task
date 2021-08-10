import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, withLatestFrom, mergeMap } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api/api.service';
import { apiUsersUrls } from '../users.constant';
import { selectUsers } from './users.selectors';
import { Store } from '@ngrx/store';
import { getUsers, getUsersFailure, getUsersSuccess } from './users.actions';

@Injectable()
export class UsersEffects {
  constructor(
    private store: Store,
    private actions$: Actions,
    private apiService: ApiService
  ) {}

  getusers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers),
      withLatestFrom(this.store.select(selectUsers)),
      mergeMap(([_, users]) => {
        if (!users.length) {
          return this.apiService.get(apiUsersUrls).pipe(
            map((response) => getUsersSuccess({ payload: response })),
            catchError((error) => of(getUsersFailure({ payload: error })))
          );
        }
        return of(getUsersSuccess({ payload: users }));
      })
    )
  );
}
