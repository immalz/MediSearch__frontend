import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: string;

  constructor() {
    this.lat = -11.864826;
    this.lng = -77.07443;
    this.zoom = 6;
    this.mapTypeId = 'hybrid';
   }

   getCurrentPosition(): any {
     navigator.geolocation.getCurrentPosition(position => {
       this.lat = position.coords.latitude;
       this.lng = position.coords.longitude;
       this.zoom = 17;
     });
   }
  ngOnInit(): void {
    this.getCurrentPosition();
  }

}
