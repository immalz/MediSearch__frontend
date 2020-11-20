import {Routes} from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const ROUTES: Routes = [
    {path: 'inicio', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'acceder', component: LoginComponent},
    {path: 'registro', component: RegisterComponent},
    {path: '', pathMatch: 'full', redirectTo: 'inicio'},
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];
