import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/app/tasks',
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('../../features/tasks/tasks.module').then(
            (m) => m.TasksModule
          ),
      },
      {
        path: 'tasks/:taskId',
        loadChildren: () =>
          import('../../features/task/task.module').then((m) => m.TaskModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../../features/users/users.module').then(
            (m) => m.UsersModule
          ),
      },
      {
        path: 'users/:userId',
        loadChildren: () =>
          import('../../features/user/user.module').then((m) => m.UserModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
