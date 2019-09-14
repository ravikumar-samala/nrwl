import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './containers/signin/signin.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: SigninComponent }
    ]),

    StoreModule.forRoot({}),

    EffectsModule.forRoot([])
  ],
  declarations: [SigninComponent],
  exports: [SigninComponent]
})
export class ClientAuthModule {}
