import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { reducers, metaReducers } from './store/store.reducers';
import { TasksEffects } from '../features/tasks/store/tasks.effects';
import { UsersEffects } from '../features/users/store/users.effects';
import { CustomRouterSerializer } from './router/serializer/router.serializer';
import { UserEffects } from '../features/user/store/user.effects';
import { TaskEffects } from '../features/task/store/task.effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomRouterSerializer,
    }),
    EffectsModule.forRoot([
      TasksEffects,
      TaskEffects,
      UsersEffects,
      UserEffects,
    ]),
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
