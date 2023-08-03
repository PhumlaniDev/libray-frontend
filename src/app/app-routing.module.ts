import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guard/auth.guard';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './core/components/register/register.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
