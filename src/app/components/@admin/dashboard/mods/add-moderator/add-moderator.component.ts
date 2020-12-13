import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-moderator',
  templateUrl: './add-moderator.component.html',
  styleUrls: ['./add-moderator.component.css']
})
export class AddModeratorComponent implements OnInit {

  signUpPharmacy: FormGroup;

  constructor(private builder: FormBuilder, public authService: AuthService, private router: Router) {
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
      imgURL: ['', Validators.required],
      roles: [['moderator']]
    });

  }

  ngOnInit(): void {
  }

  send(valueForm): any {
        this.authService.signUpPharm(valueForm)
        .subscribe(
          res => {
            this.router.navigate(['/admin/dashboard/lista-moderadores']);
            Swal.fire(
              'Felicidades!',
              `La farmacia ${valueForm.name} se ha registrado satisfactoriamente!`,
              'success'
            );
          },
          err => {
            Swal.fire(
              'Lastima!',
              `La farmacia ${valueForm.name} no se ha podido registrar!`,
              'error'
            );
          }
        );
      }
}


