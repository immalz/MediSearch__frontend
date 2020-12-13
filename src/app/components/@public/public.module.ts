import { ButtonComponent } from './../shared/button/button.component';
import { AuthAdminGuard } from 'src/app/guards/auth-admin.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PublicRoutingModule } from './public-routing.module';
import { AgmCoreModule } from '@agm/core';

// GUARDS
import { AuthGuard } from 'src/app/guards/auth.guard';
import {TokenInterceptorService} from '../../services/token-interceptor.service';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { LoadingComponent } from '../shared/loading/loading.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MapsComponent } from './maps/maps.component';
import { CartComponent } from './cart/cart.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPharmsComponent } from './login-pharms/login-pharms.component';
import { AuthModGuard } from 'src/app/guards/authMod.guard';
import { SidebarComponent } from './perfil/sidebar/sidebar.component';
import { UpdateInfoComponent } from './perfil/update-info/update-info.component';
import { HistorialComponent } from './perfil/historial/historial.component';
import { InfoComponent } from './perfil/info/info.component';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoadingComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    PerfilComponent,
    MapsComponent,
    LoginPharmsComponent,
    ButtonComponent,
    SidebarComponent,
    UpdateInfoComponent,
    HistorialComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      showUnits: false
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDPvDT9k1KOThoPU-zNdTcRQmxBjSdOTtw'
    }),
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LoadingComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    PerfilComponent,
    MapsComponent,
    ButtonComponent
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthAdminGuard, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthModGuard, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  entryComponents: [MapsComponent]
})
export class PublicModule { }
