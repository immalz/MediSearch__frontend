import {Routes} from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {AuthGuard} from './auth.guard';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ModeratorComponent } from './components/moderator/moderator.component';
import { ModsComponent } from './components/dashboard/mods/mods.component';
import { InventaryComponent } from './components/dashboard/inventary/inventary.component';
import { AdminboardComponent } from './components/dashboard/adminboard/adminboard.component';
import { AddMedicineComponent } from './components/dashboard/inventary/add-medicine/add-medicine.component';
import { AddUserComponent } from './components/dashboard/users/add-user/add-user.component';
import { AddModeratorComponent } from './components/dashboard/mods/add-moderator/add-moderator.component';
import { PreviewMedicineComponent } from './components/dashboard/inventary/preview-medicine/preview-medicine.component';


export const ROUTES: Routes = [
    {path: 'inicio', component: HomeComponent},
    {
        path: 'admin/dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent,
        children: [
            {path: '', component: AdminboardComponent},
            {path: 'lista-usuarios', component: UsersComponent},
            {path: 'registro-usuario', component: AddUserComponent},

            {path: 'lista-moderadores', component: ModsComponent},
            {path: 'registro-moderador', component: AddModeratorComponent},

            {path: 'lista-inventario', component: InventaryComponent},
            {path: 'registro-inventario', component: AddMedicineComponent},
            {path: 'datos-mecidina/:id', component: PreviewMedicineComponent}
        ]
    },
    {
        path: 'admin/moderador',
        canActivate: [AuthGuard],
        component: ModeratorComponent
    },
    {path: 'acceder', component: LoginComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: '', pathMatch: 'full', redirectTo: 'inicio'},
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];
