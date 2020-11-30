import { Component, OnInit } from '@angular/core';
import { MedicinesService } from '../../../services/medicines.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inventary',
  templateUrl: './inventary.component.html',
  styleUrls: ['./inventary.component.css']
})
export class InventaryComponent implements OnInit {

  constructor(private ms: MedicinesService, private router: Router) { }
  medicines = [];


  ngOnInit(): void {
    this.ms.getMedicines()
      .subscribe(
        res => {this.medicines = res; },
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
        console.log(res);
        this.router.navigate(['/admin/dashboard']);
      },
      err => {console.log(err); }
    );
  }

}
