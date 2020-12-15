import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit, OnDestroy {

  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: string;
  pharmacyURL = 'assets/images/marcador.png';

  pharmacys: [];
  obtenerDatos: any;

  constructor(private us: UsersService) {
    this.lat = -11.8645505;
    this.lng = -77.0766131;
    this.zoom = 17;
    this.mapTypeId = 'hybrid';
   }

   ngOnInit(): void {
   }

    ngOnDestroy(): void {
    }
  }
