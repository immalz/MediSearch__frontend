import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PharmsService } from 'src/app/services/pharms.service';
import Swal from 'sweetalert2';
import {MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-preview-mods',
  templateUrl: './preview-mods.component.html',
  styleUrls: ['./preview-mods.component.css']
})
export class PreviewModsComponent implements OnInit {

  name: string;
  constructor(public pharmService: PharmsService, private dialog: MatDialog , private router: Router) { }

  ngOnInit(): void {
  }

  deletedPharm(id: string): any {
    this.name = this.pharmService.name;
    console.log(id);
    Swal.fire({
      title: `¿Seguro que deseas eliminar: ${this.name}?`,
      text: 'La eliminació es irreversible',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        this.pharmService.deletePharmacy(id)
          .subscribe(
            res => {
               console.log(res);
               this.dialog.closeAll();
               this.router.navigate(['/admin/dashboard/']);
              },
            err => { console.log(err); }
          );
      }
    },
      err => {
        console.log(err);
      }
    );
  }
}
