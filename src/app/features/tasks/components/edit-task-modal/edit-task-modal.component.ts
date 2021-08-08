import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { selectUsers } from '../../../users/store/users.selectors';
import { editTask } from '../../store/tasks.actions';
import { AddTaskModalComponent } from '../add-task-modal/add-task-modal.component';
import { Task } from '../../tasks.model';

@Component({
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.scss'],
})
export class EditTaskModalComponent implements OnInit {
  users$ = this.store.select(selectUsers);

  editUserForm: FormGroup;
  constructor(
    private store: Store,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) {}

  async onEditUser() {
    if (this.editUserForm.valid) {
      this.store.dispatch(editTask({ payload: this.editUserForm.value }));
      this.dialogRef.close(this.editUserForm.value);
    }
  }
  ngOnInit(): void {
    this.editUserForm = this.fb.group({
      id: this.fb.control(this.data.id),
      title: this.fb.control(this.data.title, [
        Validators.required,
        Validators.maxLength(150),
      ]),
      userId: this.fb.control(this.data.userId, [Validators.required]),
      completed: this.fb.control(this.data.completed, [Validators.required]),
    });
  }
}
