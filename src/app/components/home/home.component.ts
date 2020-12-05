import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import {MatDialog } from '@angular/material/dialog';
import { MapsComponent } from '../maps/maps.component';

import { MedicinesService } from '../../services/medicines.service';
import { MapsService } from '../../services/maps.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: string;

  constructor(private ms: MedicinesService, private dialog: MatDialog, private maps: MapsService) {
    this.lat = -11.8645505;
    this.lng = -77.0766131;
    this.zoom = 17;
    this.mapTypeId = 'hybrid';
  }

  medicines = [];
  medicineFound = [];

  searching = false;

  imagePath = 'http://localhost:4000/';

  getCurrentPosition(): any {
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.zoom = 17;
    });
  }

  ngOnInit(): void {

    this.getCurrentPosition();
    this.ms.getMedicines()
      .subscribe(
        res => {
          console.log(res);
          this.medicines = res;
        },
        err => { console.log(err); }
      );
  }

  searchMedicine(name: string): any {
    const capitalize = this.titleCaseWord(name);
    this.searching = true;
    this.ms.searchMedicine(capitalize).pipe(debounceTime(300))
      .subscribe((data: any) => {
        this.medicineFound = data;
        console.log(data);
      });

    if (this.medicineFound.length === 0) {
        this.searching = false;
      }
  }

  titleCaseWord(word: string): any {
    if (!word) { return word; }
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

  openMap(lat: number, lng: number, name: string, imgURL: string): void {
    this.maps.lat = lat;
    this.maps.lng = lng;
    this.maps.nameCompany = name;
    this.maps.imgURL = imgURL;

    this.dialog.open(MapsComponent);
  }
}
