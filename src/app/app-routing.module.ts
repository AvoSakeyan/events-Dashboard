import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuard} from './Guards/auth.guard';
import {NonAdminGuard} from './Guards/nonAdmin.guard';
import {AdminGuard} from './Guards/admin.guard';
import {DashboardComponent} from './AdminSide/Components/dashboard/dashboard.component';
import {ClientdashboardComponent} from './ClientSide/Components/clientdashboard/clientdashboard.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'clientDashboard', component: ClientdashboardComponent, canActivate: [AuthGuard, NonAdminGuard]},
  {path: 'adminDashboard', component: DashboardComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
