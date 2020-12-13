import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

import {MatDialog } from '@angular/material/dialog';
import { PreviewModsComponent } from './preview-mods/preview-mods.component';
import { PharmsService } from 'src/app/services/pharms.service';

@Component({
  selector: 'app-mods',
  templateUrl: './mods.component.html',
  styleUrls: ['./mods.component.css']
})
export class ModsComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private us: UsersService, private dialog: MatDialog, private pharmService: PharmsService) { }
  pharmacys = [];
  obtenerDatos: any;
  ngOnInit(): void {
    this.obtenerDatos = this.us.getPharmacy()
    .subscribe(
      res => {
        console.log(res);
        this.pharmacys = res;
      },
        err => { console.log(err); }
    );
  }

  detailPharm(pharmacy): any {
    console.log(pharmacy);
    this.pharmService.id = pharmacy._id;
    this.pharmService.name = pharmacy.name;
    this.pharmService.address = pharmacy.address;
    this.pharmService.email = pharmacy.email;
    this.pharmService.imgURL = pharmacy.imgURL;
    this.dialog.open(PreviewModsComponent);
  }

  ngOnDestroy(): void {
    this.obtenerDatos.unsubscribe();
  }

}
