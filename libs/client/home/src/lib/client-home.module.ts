import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ClientHomeComponent } from './client-home/client-home.component';

export const ClientHomeRoutes: Route[] = [{
path:'',component:ClientHomeComponent
}]

@NgModule({
  imports: [
    CommonModule,RouterModule  
  ],
  declarations: [ClientHomeComponent],
  exports: [ClientHomeComponent]
})
export class ClientHomeModule {}
