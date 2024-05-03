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
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthGuard} from "./guards/auth.guard";
import {AuthorizationGuard} from "./guards/authorization.guard";

const routes: Routes = [
  {path: "login", component : LoginComponent },
  {path: "", component : LoginComponent },

  {path: "admin", component : AdminTemplateComponent ,

    canActivate:[AuthGuard],
    children :[
      {path: "profile", component : ProfileComponent },
      {path: "home", component : HomeComponent },

      {path: "loadStudents", component : LoadStudentComponent,
        canActivate:[AuthorizationGuard], data : {roles : ['ADMIN']}
      },
      {path: "loadPayments", component : LoadPaymentComponent,
        canActivate:[AuthorizationGuard], data : {roles : ['ADMIN']}
      },
      {path: "dashboard", component : DashboardComponent },
      {path: "students", component : StudentsComponent },
      {path: "payments", component : PaymentsComponent },
    ] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
