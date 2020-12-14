import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PharmsService } from 'src/app/services/pharms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.css']
})
export class ChangeInfoComponent implements OnInit {

  signUpPharmacy: FormGroup;
  id: string;
  infoPharmacy: any;

  constructor(private builder: FormBuilder, public authService: AuthService, private router: Router, private ps: PharmsService) {

    this.signUpPharmacy = this.builder.group({
      name: ['', Validators.required],
      nameOwner: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      RUC: ['', Validators.required],
      phone: ['', Validators.required],
      razonSocial: ['', Validators.required],
      address: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      imgURL: ['', Validators.required]
    });

  }

  ngOnInit(): any {
    this.id = localStorage.getItem('_id');
  }

  getInfo(): any {
    this.ps.getSinglePharm(this.id)
    .subscribe(
      res => {
        this.infoPharmacy = res;

        const {name, nameOwner, email, password, RUC, phone, razonSocial, address, latitude, longitude, imgURL} = this.infoPharmacy;

        this.signUpPharmacy.patchValue({
          name,
          nameOwner,
          email,
          password,
          RUC,
          phone,
          razonSocial,
          address,
          latitude,
          longitude,
          imgURL,
        });
      },
      err => {console.log(err); }
    );
  }

  update(valueForm): any {
    console.log(valueForm);
    this.ps.updatePharm(valueForm, this.id)
    .subscribe(
      res => {
        this.router.navigate(['/farmacia/dashboard']);
        Swal.fire(
          'Felicidades!',
          'Su informacion se ha actualizado correctamente!',
          'success'
        );
      },
      err => {
        Swal.fire(
          'Error inesperado!',
          'El proceso ha fallado, por favor vuelva a intentar!',
          'error'
        );
      }
    );
}
}
