import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicinesService } from 'src/app/services/medicines.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.css']
})
export class AdminboardComponent implements AfterViewInit {

  constructor(private us: UsersService, private ms: MedicinesService) { }

  countUser: any;
  countMedicine: any;
  countPharmacy: any;
  lastPharm: any;
  lastUser: any;
  lastMedicine: any;

  imagePath = 'http://localhost:4000/';

  ngAfterViewInit(): void {
    this.getUsers();
    this.getMedicines();
    this.getPharms();
    this.getLastPharm();
    this.getLastUser();
    this.getLastMedicine();
  }

  getUsers(): any {
    this.us.getUsersCount()
      .subscribe(
        res => {
          this.countUser = res;
        },
        err => { console.log(err); }
      );
  }

  getPharms(): any {
    this.us.getPharmacyCount()
      .subscribe(
        res => {
          this.countPharmacy = res;
        },
        err => { console.log(err); }
      );
  }

  getMedicines(): any {
    this.ms.getMedicineCount()
      .subscribe(
        res => {
          this.countMedicine = res;
        },
        err => { console.log(err); }
      );
  }

  getLastUser(): any {
    this.us.getLastUser()
    .subscribe(
      res => {
        console.log(res[0]);
        this.lastUser =  res[0];
      },
      err => {
        console.log(err);
      }
    );
  }

  getLastPharm(): any {
    this.us.getLastPharm()
    .subscribe(
      res => {
        console.log(res[0]);
        this.lastPharm = res[0];
      },
      err => {
        console.log(err);
      }
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
