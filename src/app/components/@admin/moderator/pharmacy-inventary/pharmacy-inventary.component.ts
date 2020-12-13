import { Component, OnDestroy, OnInit } from '@angular/core';
import { MedicinesService } from 'src/app/services/medicines.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pharmacy-inventary',
  templateUrl: './pharmacy-inventary.component.html',
  styleUrls: ['./pharmacy-inventary.component.css']
})
export class PharmacyInventaryComponent implements OnInit, OnDestroy {

  constructor(private ms: MedicinesService, private router: Router) { }

  medicines = [];
  id: string;
  obtenerDatos: any;
  name: string;

  imagePath = 'http://localhost:4000/';

  ngOnInit(): void {
    this.id = localStorage.getItem('_id');
    console.log(this.id);
    this.obtenerDatos = this.ms.getMedicineForPharmacy(this.id)
      .subscribe(
        res => {
          this.medicines = res;
          this.name = localStorage.getItem('name');
        },
        err => { console.log(err); }
      );
  }

  selectedMedicine(id: string): any {
    this.router.navigate(['/farmacia/dashboard/datos-mecidina', id]);
  }

  deletedMedicine(id: string): any {
    this.ms.deleteMedicine(id)
    .subscribe(
      res => {
        this.router.navigate(['/farmacia/dashboard']);
      },
      err => {console.log(err); }
    );
  }


  ngOnDestroy(): any {
    this.obtenerDatos.unsubscribe();
  }
}
