import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getUsers } from './store/users.actions';
import {
  selectUsers,
  selectUsersIsLoading,
  selectUsersIsLoadingFailure,
  selectUsersIsLoadingSuccess,
} from './store/users.selectors';
import { User } from './users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$ = this.store.select(selectUsers);
  usersIsLoading$ = this.store.select(selectUsersIsLoading);
  usersIsLoadingSuccess$ = this.store.select(selectUsersIsLoadingSuccess);
  usersIsLoadingFailure$ = this.store.select(selectUsersIsLoadingFailure);

  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'email',
    'address',
    'phone',
    'website',
    'company',
  ];
  dataSource: MatTableDataSource<User>;
  private destroy$ = new Subject<void>();
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getUsers());

    this.users$.pipe(takeUntil(this.destroy$)).subscribe((users) => {
      this.dataSource = new MatTableDataSource(users);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
