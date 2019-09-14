import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {adminDashboardRoutes, AdminDashboardModule} from '@nrwl-project/admin/dashboard';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
 
@NgModule({
  declarations: [AppComponent, DashboardViewComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: 'admin-dashboard',children:adminDashboardRoutes}], { initialNavigation: 'enabled' }),
    StoreModule.forRoot({},{metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    AdminDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DashboardViewComponent]
})
export class AppModule {}
