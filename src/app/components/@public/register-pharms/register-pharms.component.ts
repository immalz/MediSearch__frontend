import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { PharmsService } from 'src/app/services/pharms.service';
import PharmRequest from 'src/app/interfaces/PharmRequest';

@Component({
  selector: 'app-register-pharms',
  templateUrl: './register-pharms.component.html',
  styleUrls: ['./register-pharms.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})
export class RegisterPharmsComponent implements OnInit {

  GeneralFormGroup: FormGroup;
  PrivateFormGroup: FormGroup;
  AddressFormGroup: FormGroup;

  RequestPharm: PharmRequest;

  constructor(private fb: FormBuilder, private router: Router, public ps: PharmsService) { }

  ngOnInit(): void {

    this.GeneralFormGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.required],
      photo: ['', Validators.required],
    });

    this.PrivateFormGroup = this.fb.group({
      razonSocial: ['', Validators.required],
      RUC: ['', Validators.required],
      nameOwner: ['', Validators.required],
    });

    this.AddressFormGroup = this.fb.group({
      address: ['', Validators.required],
      latitude: ['', Validators.required],
      length: ['', Validators.required],
    });
  }


  save(): any {
    // tslint:disable-next-line: max-line-length
    if (this.GeneralFormGroup.valid && this.PrivateFormGroup.valid && this.AddressFormGroup.valid) {

      this.RequestPharm = Object.assign(this.GeneralFormGroup.value, this.PrivateFormGroup.value, this.AddressFormGroup.value);

      this.ps.createRequestPharm(this.RequestPharm)
          .subscribe(
            res => {
              Swal.fire(
                'Felicidades!',
                `Los datos ingresados pasaran por una evaluación y nos pondremos en contacto contigo una vez se termine la validación!`,
                'success'
              ).then(result => {
                if (result.value) {
                  this.router.navigate(['/']);
                  }
              });
            },
            err => {
              Swal.fire(
                'Lo sentimos!',
                `El proceso de validacion ha fallado, vuelve a intentarlo!`,
                'error'
              );
            }
          );
    }
  }
  // send(valueForm: PharmRequest): any {
  // }
}



