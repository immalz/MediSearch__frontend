import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { PublicModule } from './components/@public/public.module';
import { AdminModule } from './components/@admin/admin.module';
// Rutas

import { AuthAdminGuard } from 'src/app/guards/auth-admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { AuthModGuard } from './guards/authMod.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PublicModule,
    AdminModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
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
  bootstrap: [AppComponent]
})
export class AppModule { }
