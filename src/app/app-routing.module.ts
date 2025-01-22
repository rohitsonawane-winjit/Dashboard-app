import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
  {path : '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  // {
  //   path: '',
  //   // canActivate: [AuthGuard],
  //   children: [
  //     {path: 'dashboard', component: DashboardComponent},
  //     {path: 'user-table', component: UserTableComponent}
  //   ]
  // }
  {
    path: '',
    // canActivate: [AuthGuard],
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'dashboard/dashboard', component: DashboardComponent},
      {path: 'dashboard/user-table', component: UserTableComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
