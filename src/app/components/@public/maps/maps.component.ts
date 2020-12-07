import { Component, Input, OnInit } from '@angular/core';
import { MapsService } from 'src/app/services/maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  zoom: number;
  mapTypeId: string;
  pharmacyURL = 'assets/images/marcador.png';

  constructor(public maps: MapsService) {
    this.zoom = 17;
    this.mapTypeId = 'hybrid';
   }

  ngOnInit(): void {}

}
