import { Component, OnInit } from '@angular/core';
import { MedicinesService } from 'src/app/services/medicines.service';
import { PharmsService } from 'src/app/services/pharms.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-modboard',
  templateUrl: './modboard.component.html',
  styleUrls: ['./modboard.component.css']
})
export class ModboardComponent implements OnInit {

  constructor(private us: UsersService, private ps: PharmsService,  private ms: MedicinesService) { }

  countMedicine: any;
  id: string;
  lastMedicine: any;
  imagePath = 'http://localhost:4000/';
  infoPharmacy: any;

  ngOnInit(): void {
    this.getLastMedicine();
    this.id = localStorage.getItem('_id');
    this.CountMedicine();
    this.getInfo();
  }

  getInfo(): any {
    this.ps.getSinglePharm(this.id)
    .subscribe(
      res => {
        console.log(res);
        this.ps.imgPharm = res.imgURL;
        this.infoPharmacy = res;
       },
      err => {console.log(err); }
    );
  }


  CountMedicine(): any {
    this.ps.getCountMedicines(this.id)
    .subscribe(
      res => {
        this.countMedicine = res;
      },
      err => { console.log(err); }
    );
  }

  getLastMedicine(): any {
    this.ms.getLastMedicine()
    .subscribe(
      res => {
        console.log(res[0]);
        this.lastMedicine = res[0];
      },
      err => {
        console.log(err);
      }
    );
  }
}
