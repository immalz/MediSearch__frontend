import { CartService } from './../../../services/cart.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog } from '@angular/material/dialog';
import { MapsComponent } from '../maps/maps.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import Medicine from 'src/app/interfaces/Medicine';
import { MedicinesService } from 'src/app/services/medicines.service';
import { UsersService } from 'src/app/services/users.service';
import { MapsService } from 'src/app/services/maps.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  @Input() medicine: Medicine;

  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: string;
  pharmacyURL = 'assets/images/marcador.png';
  obtenerDatos: any;
  pharmacys: [];

  ELEMENT_DATA: Medicine[] = [];

  imagePath = 'http://localhost:4000/';

  displayedColumns: string[] = ['#', 'nombre', 'categoria', 'tipo', 'precio', 'farmacia', 'tools'];

  dataSource = new MatTableDataSource<Medicine>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // tslint:disable-next-line: max-line-length
  constructor(private ms: MedicinesService, private dialog: MatDialog, private maps: MapsService, private us: UsersService, private cs: CartService) {
    this.lat = -11.8645505;
    this.lng = -77.0766131;
    this.zoom = 17;
    this.mapTypeId = 'hybrid';
  }

  ngAfterViewInit(): any {
    this.getAllMedicines();
    this.getPhamarcys();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAllMedicines(): any {
    this.ms.getMedicines()
      .subscribe(
        res => {
          this.dataSource.data = res;
        },
        err => console.log(err)
      );
  }

  addToCart(medicine: string): any {
    this.cs.numberCart = this.cs.numberCart + 1;
    Swal.fire(
      'CARRITO DE COMPRA',
      `Se ha añadido: ${medicine} al carrito!`,
      'success'
    );
  }
  getPhamarcys(): any {
    this.obtenerDatos = this.us.getPharmacy()
    .subscribe(
      res => {
        this.pharmacys = res;
      },
        err => { console.log(err); }
    );
   }

  applyFilter(event: Event): any {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openMap(lat: number, lng: number, name: string, imgURL: string): void {
    this.maps.lat = lat;
    this.maps.lng = lng;
    this.maps.nameCompany = name;
    this.maps.imgURL = imgURL;

    this.dialog.open(MapsComponent);
  }

  onAddToCart(): any {
    this.cs.addProductToCart(this.medicine);
  }

  ngOnDestroy(): void {
    this.obtenerDatos.unsubscribe();
  }
}
