import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { withLatestFrom } from 'rxjs/operators';
import { selectUsers } from 'src/app/features/users/store/users.selectors';
import { createTask } from '../../store/tasks.actions';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss'],
})
export class AddTaskModalComponent implements OnInit {
  users$ = this.store.select(selectUsers);

  addUserForm: FormGroup;
  constructor(
    private store: Store,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddTaskModalComponent>
  ) {}

  closeModal() {
    this.dialogRef.close({ close: true });
  }
  onAddUser() {
    if (this.addUserForm.valid) {
      this.store.dispatch(createTask({ payload: this.addUserForm.value }));
      this.dialogRef.close(this.addUserForm.value);
    }
  }
  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      title: this.fb.control('', [
        Validators.required,
        Validators.maxLength(150),
      ]),
      userId: this.fb.control('', [Validators.required]),
      completed: this.fb.control(false, [Validators.required]),
    });
  }
}
