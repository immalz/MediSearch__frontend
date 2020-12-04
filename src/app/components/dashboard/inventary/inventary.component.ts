import { Component, OnDestroy, OnInit } from '@angular/core';
import { MedicinesService } from '../../../services/medicines.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inventary',
  templateUrl: './inventary.component.html',
  styleUrls: ['./inventary.component.css']
})
export class InventaryComponent implements OnInit, OnDestroy {

  constructor(private ms: MedicinesService, private router: Router) { }

  medicines = [];

  obtenerDatos: any;

  imagePath = 'http://localhost:4000/';

  ngOnInit(): void {
    this.obtenerDatos = this.ms.getMedicines()
      .subscribe(
        res => {
          this.medicines = res;
        },
        err => { console.log(err); }
      );
  }

  selectedMedicine(id: string): any {
    this.router.navigate(['/admin/dashboard/datos-mecidina', id]);
  }

  deletedMedicine(id: string): any {
    this.ms.deleteMedicine(id)
    .subscribe(
      res => {
        this.router.navigate(['/admin/dashboard']);
      },
      err => {console.log(err); }
    );
  }


  ngOnDestroy(): any {
    this.obtenerDatos.unsubscribe();
  }
}
