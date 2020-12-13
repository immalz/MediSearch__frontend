import { ChangeInfoComponent } from './moderator/change-info/change-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthAdminGuard } from 'src/app/guards/auth-admin.guard';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthModGuard } from 'src/app/guards/authMod.guard';

// COMPONENTES
import { AdminboardComponent } from './dashboard/adminboard/adminboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMedicineComponent } from './dashboard/inventary/add-medicine/add-medicine.component';
import { InventaryComponent } from './dashboard/inventary/inventary.component';
import { PreviewMedicineComponent } from './dashboard/inventary/preview-medicine/preview-medicine.component';
import { AddModeratorComponent } from './dashboard/mods/add-moderator/add-moderator.component';
import { ModsComponent } from './dashboard/mods/mods.component';
import { PreviewModsComponent } from './dashboard/mods/preview-mods/preview-mods.component';
import { ReqNewModsComponent } from './dashboard/mods/req-new-mods/req-new-mods.component';
import { AddUserComponent } from './dashboard/users/add-user/add-user.component';
import { UsersComponent } from './dashboard/users/users.component';
import { ModboardComponent } from './moderator/modboard/modboard.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { PharmacyAddMedicineComponent } from './moderator/pharmacy-add-medicine/pharmacy-add-medicine.component';
import { PharmacyInventaryComponent } from './moderator/pharmacy-inventary/pharmacy-inventary.component';
import { PharmacyPreviewMedicineComponent } from './moderator/pharmacy-preview-medicine/pharmacy-preview-medicine.component';

const routes: Routes = [
  {
    path: 'admin/dashboard',
    canActivate: [AuthGuard, AuthAdminGuard], // AuthAdminGuard
    component: DashboardComponent,
    children: [
        {path: '', component: AdminboardComponent},
        {path: 'lista-usuarios', component: UsersComponent},
        {path: 'registro-usuario', component: AddUserComponent},

        {path: 'lista-moderadores', component: ModsComponent},
        {path: 'registro-moderador', component: AddModeratorComponent},
        {path: 'validar-moderador', component: ReqNewModsComponent},
        {path: 'datos-moderador/:id', component: PreviewModsComponent},

        {path: 'lista-inventario', component: InventaryComponent},
        {path: 'registro-inventario', component: AddMedicineComponent},
        {path: 'datos-mecidina/:id', component: PreviewMedicineComponent}
    ]
},
{
  path: 'farmacia/dashboard',
  canActivate: [AuthGuard, AuthModGuard],
  component: ModeratorComponent,
  children: [
    {path: '', component: ModboardComponent},
    {path: 'actualizar-informacion', component: ChangeInfoComponent},
    {path: 'lista-inventario', component: PharmacyInventaryComponent},
    {path: 'registro-inventario', component: PharmacyAddMedicineComponent},
    {path: 'datos-mecidina/:id', component: PharmacyPreviewMedicineComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
