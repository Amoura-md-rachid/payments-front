import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StudentsComponent} from "./students/students.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {LoadStudentComponent} from "./load-student/load-student.component";
import {LoadPaymentComponent} from "./load-payment/load-payment.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PaymentsComponent} from "./payments/payments.component";

const routes: Routes = [
  {path: "home", component : HomeComponent },
  {path: "profile", component : ProfileComponent },
  {path: "login", component : LoginComponent },
  {path: "loadStudents", component : LoadStudentComponent },
  {path: "loadPayments", component : LoadPaymentComponent },
  {path: "dashboard", component : DashboardComponent },
  {path: "students", component : StudentsComponent },
  {path: "payments", component : PaymentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
