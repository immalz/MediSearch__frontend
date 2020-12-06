import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginPharmsComponent } from './login-pharms/login-pharms.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegisterPharmsComponent } from './register-pharms/register-pharms.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'acceder', component: LoginComponent },
  {
    path: 'acceder/empresa',
    component: LoginPharmsComponent
  },
  { path: 'registro', component: RegisterComponent },
  { path: 'unetenos', component: RegisterPharmsComponent },
  {
     path: 'perfil',
     canActivate: [AuthGuard],
     component: PerfilComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
