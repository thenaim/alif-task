import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, withLatestFrom, mergeMap } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api/api.service';
import { apiTaskUrl, urlTaskParamKey } from '../task.constant';
import { Store } from '@ngrx/store';
import { selectRouteParams } from '../../../core/store/router/router.selectors';
import {
  getTaskAction,
  getTaskFailureAction,
  getTaskSuccessAction,
} from './task.actions';

@Injectable()
export class TaskEffects {
  constructor(
    private store: Store,
    private actions$: Actions,
    private apiService: ApiService
  ) {}

  getTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTaskAction),
      withLatestFrom(this.store.select(selectRouteParams)),
      mergeMap(([_, params]) =>
        this.apiService.get(apiTaskUrl(params[urlTaskParamKey])).pipe(
          map((response) => getTaskSuccessAction({ payload: response })),
          catchError((error) => of(getTaskFailureAction({ payload: error })))
        )
      )
    )
  );
}
