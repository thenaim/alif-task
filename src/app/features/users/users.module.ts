import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, SharedModule, UsersRoutingModule],
})
export class UsersModule {}
