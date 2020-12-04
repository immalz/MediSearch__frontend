import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthGuard} from './auth.guard';
import {TokenInterceptorService} from './services/token-interceptor.service';
// Enrutador
import { ROUTES } from './app.routes';
import { AgmCoreModule } from '@agm/core';


import { NgCircleProgressModule } from 'ng-circle-progress';
import {MaterialModule} from './material/material.module';
// Rutas
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { ModeratorComponent } from './components/moderator/moderator.component';

import { ModsComponent } from './components/dashboard/mods/mods.component';
import { AddModeratorComponent } from './components/dashboard/mods/add-moderator/add-moderator.component';
import { PreviewModsComponent } from './components/dashboard/mods/preview-mods/preview-mods.component';
import { ReqNewModsComponent } from './components/dashboard/mods/req-new-mods/req-new-mods.component';

import { InventaryComponent } from './components/dashboard/inventary/inventary.component';
import { AdminboardComponent } from './components/dashboard/adminboard/adminboard.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { AddMedicineComponent } from './components/dashboard/inventary/add-medicine/add-medicine.component';
import { PreviewMedicineComponent } from './components/dashboard/inventary/preview-medicine/preview-medicine.component';
import { AddUserComponent } from './components/dashboard/users/add-user/add-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterPharmsComponent } from './components/register-pharms/register-pharms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoadingComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    DashboardComponent,
    PerfilComponent,
    ModeratorComponent,
    UsersComponent,
    ModsComponent,
    InventaryComponent,
    AdminboardComponent,
    SidebarComponent,
    AddMedicineComponent,
    AddUserComponent,
    AddModeratorComponent,
    PreviewMedicineComponent,
    PreviewModsComponent,
    ReqNewModsComponent,
    RegisterPharmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot( ROUTES, { useHash: true,  scrollPositionRestoration: 'enabled'} ),
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      showUnits: false
    }),
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDPvDT9k1KOThoPU-zNdTcRQmxBjSdOTtw'
    })
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
