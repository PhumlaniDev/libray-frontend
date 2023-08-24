import { RouterModule, Routes } from '@angular/router';

import { AppLayoutComponent } from './core/layout/app-layout/app-layout.component';
import { AuthGuard } from './core/guard/auth.guard';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './core/components/register/register.component';
import { AdminComponent } from './core/components/admin/admin.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'books',
        component: HomeComponent,
      },
      {
        path: '',
        redirectTo: '/books',
        pathMatch: 'full',
      },
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
      },
    ]
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
