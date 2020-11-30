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

  ngOnInit(): void {

    this.us.getUsersCount()
    .subscribe(
      res => {
        console.log(res);
        this.countUser = res;
      },
      err => {console.log(err); }
    );

    this.ms.getMedicineCount()
    .subscribe(
      res => {
        console.log(res);
        this.countMedicine = res;
      },
      err => {console.log(err); }
    );
  }
}