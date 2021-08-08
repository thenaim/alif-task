import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  map,
  catchError,
  switchMap,
  withLatestFrom,
  mergeMap,
} from 'rxjs/operators';
import { ApiService } from '../../../core/services/api/api.service';
import * as tasksAction from './tasks.actions';
import { apiTasksUrls } from '../tasks.constant';
import { selectTasks, selectTasksLastId } from './tasks.selectors';
import { Store } from '@ngrx/store';

@Injectable()
export class TasksEffects {
  constructor(
    private store: Store,
    private actions$: Actions,
    private apiService: ApiService
  ) {}

  getTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tasksAction.getTasks),
      withLatestFrom(this.store.select(selectTasks)),
      mergeMap(([action, tasks]) => {
        if (!tasks.length) {
          return this.apiService.get(apiTasksUrls).pipe(
            map((response) => tasksAction.getTasksSuccess({ response })),
            catchError((error: any) => of(tasksAction.getTasksFailure(error)))
          );
        }
        return of(tasksAction.getTasksSuccess({ response: tasks }));
      })
    )
  );

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tasksAction.createTask),
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(selectTasksLastId)),
          map(([action, lastTaskId]) =>
            tasksAction.createTaskSuccess({
              id: lastTaskId + 1,
              title: action.payload.title,
              userId: action.payload.userId,
              completed: action.payload.completed,
              username: undefined,
            })
          )
        )
      ),
      catchError((error: any) => of(tasksAction.createTaskFailure(error)))
    )
  );
}
