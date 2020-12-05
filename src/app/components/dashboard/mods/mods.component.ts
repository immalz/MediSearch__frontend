import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-mods',
  templateUrl: './mods.component.html',
  styleUrls: ['./mods.component.css']
})
export class ModsComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private us: UsersService) { }
  pharmacys = [];
  obtenerDatos: any;
  ngOnInit(): void {
    this.obtenerDatos = this.us.getPharmacy()
    .subscribe(
      res => {
        this.pharmacys = res;
        console.log(this.pharmacys);
      },
        err => { console.log(err); }
    );
  }

  ngOnDestroy(): void {
    this.obtenerDatos.unsubscribe();
  }

}
