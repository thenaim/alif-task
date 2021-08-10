import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { getTaskAction } from './store/task.actions';
import {
  selectTask,
  selectTaskIsLoading,
  selectTaskIsLoadingFailure,
  selectTaskIsLoadingSuccess,
} from './store/task.selectors';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  task$ = this.store.select(selectTask);
  taskIsLoading$ = this.store.select(selectTaskIsLoading);
  taskIsLoadingSuccess$ = this.store.select(selectTaskIsLoadingSuccess);
  taskIsLoadingFailure$ = this.store.select(selectTaskIsLoadingFailure);

  private destroy$ = new Subject<void>();
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getTaskAction());
  }
}
