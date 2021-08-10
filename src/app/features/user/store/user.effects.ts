import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, withLatestFrom, mergeMap } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api/api.service';
import { urlUserParamKey, apiUserUrl } from '../user.constant';
import { Store } from '@ngrx/store';
import { selectRouteParams } from '../../../core/store/router/router.selectors';
import {
  getUserAction,
  getUserFailureAction,
  getUserSuccessAction,
} from './user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private store: Store,
    private actions$: Actions,
    private apiService: ApiService
  ) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserAction),
      withLatestFrom(this.store.select(selectRouteParams)),
      mergeMap(([_, params]) =>
        this.apiService.get(apiUserUrl(params[urlUserParamKey])).pipe(
          map((response) => getUserSuccessAction({ payload: response })),
          catchError((error) => of(getUserFailureAction({ payload: error })))
        )
      )
    )
  );
}
