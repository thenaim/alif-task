import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../../tasks.model';

@Component({
  selector: 'app-remove-task-modal',
  templateUrl: './remove-task-modal.component.html',
  styleUrls: ['./remove-task-modal.component.scss'],
})
export class RemoveTaskModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Task) {}

  ngOnInit(): void {}
}
