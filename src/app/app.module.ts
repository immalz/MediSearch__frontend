import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';


// Rutas



import { PublicModule } from './components/@public/public.module';
import { AdminModule } from './components/@admin/admin.module';

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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
