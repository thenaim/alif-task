import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AddTaskModalComponent } from './components/add-task-modal/add-task-modal.component';
import { RemoveTaskModalComponent } from './components/remove-task-modal/remove-task-modal.component';
import { EditTaskModalComponent } from './components/edit-task-modal/edit-task-modal.component';
import { TasksHeaderActionsComponent } from './components/tasks-header-actions/tasks-header-actions.component';

@NgModule({
  declarations: [
    TasksComponent,
    AddTaskModalComponent,
    RemoveTaskModalComponent,
    EditTaskModalComponent,
    TasksHeaderActionsComponent,
  ],
  imports: [CommonModule, SharedModule, TasksRoutingModule],
  entryComponents: [
    AddTaskModalComponent,
    RemoveTaskModalComponent,
    EditTaskModalComponent,
    TasksHeaderActionsComponent,
  ],
})
export class TasksModule {}
