import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { MedicinesService } from '../../../services/medicines.service';
import {Router} from '@angular/router';

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
