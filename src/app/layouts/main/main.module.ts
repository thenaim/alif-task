import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, SharedModule, MainRoutingModule],
})
export class MainModule {}
