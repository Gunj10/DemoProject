import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './main/components/dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './main/components/employee-details/employee-details.component';
import { HomePageComponent } from './main/components/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'edetails',
    component: EmployeeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
