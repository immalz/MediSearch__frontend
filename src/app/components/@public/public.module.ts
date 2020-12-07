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
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  entryComponents: [MapsComponent]
})
export class PublicModule { }
