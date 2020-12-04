import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicinesService } from '../../../../services/medicines.service';

import Medicine from '../../../../interfaces/Medicine';
import Swal from 'sweetalert2';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {
  imagePath = 'http://localhost:4000/';
  medicine: Medicine = {
    name: '',
    category: '',
    type: '',
    company: '',
    price: 0,
  };
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

    this.ms.createMedicine(this.medicine, this.file)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/admin/dashboard/lista-inventario']);
        },
        err => console.log(err)
      );
    return false;
  }
}
