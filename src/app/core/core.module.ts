import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import {
  HttpClientModule,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { reducers, metaReducers } from './store/store.reducers';
import { TasksEffects } from '../features/tasks/store/tasks.effects';
import { UsersEffects } from '../features/users/store/users.effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([TasksEffects, UsersEffects]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          name: environment.appName,
        }),
  ],
  declarations: [],
  providers: [],
  exports: [FormsModule, ReactiveFormsModule],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
