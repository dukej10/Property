import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { FormLoginGuard } from '../guards/form-login.guard';


const routes: Routes = [
  {
    path: 'user/login',
    component: LoginComponent,
    canActivate:[
      FormLoginGuard   /* Cuando el usuario no está identificado */
    ]
  },
  {
    path: 'user/logout',
    component: LogoutComponent
  },
  {
    path: 'user/register',
    component: RegisterComponent,
    canActivate: [
      FormLoginGuard   /* Cuando el usuario no está identificado */
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo : '/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
