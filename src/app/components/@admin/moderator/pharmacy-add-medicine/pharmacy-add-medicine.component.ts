import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicinesService } from 'src/app/services/medicines.service';

import Medicine from 'src/app/interfaces/Medicine';
import Swal from 'sweetalert2';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-pharmacy-add-medicine',
  templateUrl: './pharmacy-add-medicine.component.html',
  styleUrls: ['./pharmacy-add-medicine.component.css']
})
export class PharmacyAddMedicineComponent implements OnInit {

  imagePath = 'http://localhost:4000/';
  medicine: Medicine = {
    name: '',
    category: '',
    type: '',
    price: 0,
    unitPackage: 0,
    condition: '',
    maker: '',
  };

  id: string;

  file: File;
  photoSelected: string | ArrayBuffer;


  constructor(private ms: MedicinesService, private router: Router) { }

  ngOnInit(): void {
  }


  onMedicineSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = (event.target.files[0] as File);
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  // tslint:disable-next-line: max-line-length
  uploadMedicine(): any {

    this.id = localStorage.getItem('_id');
    this.ms.createMedicine(this.medicine, this.file, this.id)
      .subscribe(
        res => {
          console.log(res);
          Swal.fire(
            'Felicidades!',
            `La medicina ${this.medicine.name} se ha añadido con exito!`,
            'success'
            );
            this.router.navigate(['/farmacia/dashboard/lista-inventario']);
        },
        err => {
          Swal.fire(
            'Error inesperado!',
            'El proceso ha fallado, por favor vuelva a intentar!',
            'error'
          );
        }
      );
    return false;
  }
}


