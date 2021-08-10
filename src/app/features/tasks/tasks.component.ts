import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getUsers } from '../users/store/users.actions';
import { AddTaskModalComponent } from './components/add-task-modal/add-task-modal.component';
import { EditTaskModalComponent } from './components/edit-task-modal/edit-task-modal.component';
import { RemoveTaskModalComponent } from './components/remove-task-modal/remove-task-modal.component';
import {
  deleteTask,
  editTask,
  getTasks,
  searchTask,
} from './store/tasks.actions';
import {
  selectTasks,
  selectTasksIsLoading,
  selectTasksIsLoadingFailure,
  selectTasksIsLoadingSuccess,
} from './store/tasks.selectors';
import { Task } from './tasks.model';

const ELEMENT_DATA: any[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit, AfterViewInit, OnDestroy {
  tasks$ = this.store.select(selectTasks);
  tasksIsLoading$: Observable<boolean> = this.store.select(
    selectTasksIsLoading
  );
  tasksIsLoadingSuccess$ = this.store.select(selectTasksIsLoadingSuccess);
  tasksIsLoadingFailure$ = this.store.select(selectTasksIsLoadingFailure);

  displayedColumns: string[] = ['id', 'title', 'username', 'completed', 'more'];
  dataSource: MatTableDataSource<Task>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private destroy$ = new Subject<void>();
  constructor(private store: Store, private dialog: MatDialog) {
    this.tasks$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  onSeachTask(search: string) {
    this.store.dispatch(searchTask({ payload: { search } }));
  }

  onChangeStatus(event: any, element: Task) {
    this.store.dispatch(
      editTask({ payload: { ...element, completed: event } })
    );
  }

  onAdTask() {
    const dialogRef = this.dialog.open(AddTaskModalComponent, {
      width: '320px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result || result?.close) {
        return;
      }
      this.paginator.lastPage();
    });
  }

  editTask(task: Task) {
    const dialogRef = this.dialog.open(EditTaskModalComponent, {
      width: '320px',
      data: task,
    });
    dialogRef.afterClosed().subscribe(() => {});
  }

  removeTask(task: Task) {
    const dialogRef = this.dialog.open(RemoveTaskModalComponent, {
      width: '320px',
      data: task,
    });
    dialogRef.beforeClosed().subscribe((task) => {
      if (task) {
        if (task.id) {
          this.store.dispatch(deleteTask({ payload: { id: task.id } }));
        }
      }
    });
  }

  ngOnInit(): void {
    this.store.dispatch(getTasks());
    this.store.dispatch(getUsers());
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
