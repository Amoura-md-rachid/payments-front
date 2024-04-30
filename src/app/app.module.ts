import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { ProfileComponent } from './profile/profile.component';
import { LoadStudentComponent } from './load-student/load-student.component';
import { LoadPaymentComponent } from './load-payment/load-payment.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { PaymentsComponent } from './payments/payments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminTemplateComponent,
    ProfileComponent,
    LoadStudentComponent,
    LoadPaymentComponent,
    LoginComponent,
    StudentsComponent,
    PaymentsComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,

    MatSidenavModule,
    MatListModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
