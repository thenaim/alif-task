import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { getUserAction } from './store/user.actions';
import {
  selectUser,
  selectUserIsLoading,
  selectUserIsLoadingFailure,
  selectUserIsLoadingSuccess,
} from './store/user.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user$ = this.store.select(selectUser);
  userIsLoading$ = this.store.select(selectUserIsLoading);
  userIsLoadingSuccess$ = this.store.select(selectUserIsLoadingSuccess);
  userIsLoadingFailure$ = this.store.select(selectUserIsLoadingFailure);

  private destroy$ = new Subject<void>();
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getUserAction());
  }
}
