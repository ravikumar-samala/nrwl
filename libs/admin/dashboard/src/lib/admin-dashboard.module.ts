import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DashboardView1Component } from './dashboard-view1/dashboard-view1.component';

export const adminDashboardRoutes: Route[] = [{
  path:'',component:DashboardView1Component
}];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [DashboardView1Component],
  exports: [DashboardView1Component]
})
export class AdminDashboardModule {}
