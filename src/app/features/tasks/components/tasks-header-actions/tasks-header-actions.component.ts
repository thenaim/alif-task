import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { searchTask } from '../../store/tasks.actions';

@Component({
  selector: 'app-tasks-header-actions',
  templateUrl: './tasks-header-actions.component.html',
  styleUrls: ['./tasks-header-actions.component.scss'],
})
export class TasksHeaderActionsComponent implements OnInit, OnDestroy {
  @Output() onAdTask: EventEmitter<boolean> = new EventEmitter();
  @Output() onSearchTask: EventEmitter<string> = new EventEmitter();

  @Input() isLoading = false;
  @Input() debounceTime = 500;

  searchControl: FormControl = new FormControl('');

  private destroy$ = new Subject<void>();
  constructor() {}

  addTaskAction() {
    this.onAdTask.next(true);
  }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(takeUntil(this.destroy$), debounceTime(this.debounceTime))
      .subscribe((search: string) => this.onSearchTask.next(search));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
