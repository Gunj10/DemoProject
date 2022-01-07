import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/modules/material/material.module';
import { DashboardComponent } from './main/components/dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { EmployeeDetailsComponent } from './main/components/employee-details/employee-details.component';
import { ToastrModule } from 'ngx-toastr';
import { HomePageComponent } from './main/components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeDetailsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
