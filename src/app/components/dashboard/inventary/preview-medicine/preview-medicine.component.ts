import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicinesService } from 'src/app/services/medicines.service';

import Medicina from '../../../../interfaces/Medicine';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preview-medicine',
  templateUrl: './preview-medicine.component.html',
  styleUrls: ['./preview-medicine.component.css'],
})
export class PreviewMedicineComponent implements OnInit {
  id: string;
  medicine: Medicina;

  constructor(
    private ar: ActivatedRoute,
    private router: Router,
    private ms: MedicinesService
  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe((params) => {
      this.id = params[`id`];
      this.ms.getMedicine(this.id).subscribe(
        (res) => {
          this.medicine = res;
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  deleteMedicine(id: string): any {
    Swal.fire({
      title: `¿Seguro que deseas eliminar: ${this.medicine.name}?`,
      text: 'La eliminació es irreversible',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        this.ms.deleteMedicine(id).subscribe(
          (res) => {
            console.log(res);
            this.router.navigate(['/admin/dashboard/lista-inventario']);
          },
          (err) => {
            console.log(err);
          }
        );
        Swal.fire(
          'Eliminado!',
          'El medicamento ha sido eliminado correctamente',
          'success'
        );
      }
    });
  }

  // tslint:disable-next-line: max-line-length
  updateMedicine(name: HTMLInputElement, category: HTMLInputElement, type: HTMLInputElement, company: HTMLInputElement, price: HTMLInputElement): any {
    Swal.fire(
      'Actualizado!',
      'El medicamento ha sido actualizado correctamente',
      'success'
    ).then(result => {
      this.ms.updateMedicine(this.id, name.value, category.value, type.value, company.value, price.value)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/admin/dashboard/lista-inventario']);
          },
          err => { console.log(err); }
        );
    });
  }
}
