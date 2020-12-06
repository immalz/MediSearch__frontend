import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MedicinesService } from 'src/app/services/medicines.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.css']
})
export class AdminboardComponent implements OnInit {

  constructor(private us: UsersService, private ms: MedicinesService) { }

  countUser: any;
  countMedicine: any;
  countPharmacy: any;

  ngOnInit(): void {

    this.us.getUsersCount()
    .subscribe(
      res => {
        this.countUser = res;
      },
      err => {console.log(err); }
    );

    this.ms.getMedicineCount()
    .subscribe(
      res => {
        this.countMedicine = res;
      },
      err => {console.log(err); }
    );

    this.us.getPharmacyCount()
      .subscribe(
        res => {
          this.countPharmacy = res;
        },
        err => {console.log(err); }
      );
  }
}
