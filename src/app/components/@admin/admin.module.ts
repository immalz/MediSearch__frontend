import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// GUARDS
import { AuthGuard } from 'src/app/guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/services/token-interceptor.service';

// COMPONENTS
import { AdminRoutingModule } from './admin-routing.module';
import { ModeratorComponent } from './moderator/moderator.component';
import { UsersComponent } from './dashboard/users/users.component';
import { ModsComponent } from './dashboard/mods/mods.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventaryComponent } from './dashboard/inventary/inventary.component';
import { AdminboardComponent } from './dashboard/adminboard/adminboard.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { AddMedicineComponent } from './dashboard/inventary/add-medicine/add-medicine.component';
import { AddUserComponent } from './dashboard/users/add-user/add-user.component';
import { AddModeratorComponent } from './dashboard/mods/add-moderator/add-moderator.component';
import { PreviewMedicineComponent } from './dashboard/inventary/preview-medicine/preview-medicine.component';
import { PreviewModsComponent } from './dashboard/mods/preview-mods/preview-mods.component';
import { ReqNewModsComponent } from './dashboard/mods/req-new-mods/req-new-mods.component';
import { RegisterPharmsComponent } from '../@public/register-pharms/register-pharms.component';
import { ModboardComponent } from './moderator/modboard/modboard.component';
import { PharmacyInventaryComponent } from './moderator/pharmacy-inventary/pharmacy-inventary.component';
import { PharmacyAddMedicineComponent } from './moderator/pharmacy-add-medicine/pharmacy-add-medicine.component';
import { PharmacyPreviewMedicineComponent } from './moderator/pharmacy-preview-medicine/pharmacy-preview-medicine.component';



@NgModule({
  declarations: [
    ModeratorComponent,
    UsersComponent,
    ModsComponent,
    DashboardComponent,
    InventaryComponent,
    AdminboardComponent,
    SidebarComponent,
    AddMedicineComponent,
    AddUserComponent,
    AddModeratorComponent,
    PreviewMedicineComponent,
    PreviewModsComponent,
    ReqNewModsComponent,
    RegisterPharmsComponent,
    ModboardComponent,
    PharmacyInventaryComponent,
    PharmacyAddMedicineComponent,
    PharmacyPreviewMedicineComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      showUnits: false
    }),
  ],
  exports: [
    ModeratorComponent,
    UsersComponent,
    ModsComponent,
    DashboardComponent,
    InventaryComponent,
    AdminboardComponent,
    SidebarComponent,
    AddMedicineComponent,
    AddUserComponent,
    AddModeratorComponent,
    PreviewMedicineComponent,
    PreviewModsComponent,
    ReqNewModsComponent,
    RegisterPharmsComponent,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
})
export class AdminModule { }
