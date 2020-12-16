import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-pharms',
  templateUrl: './login-pharms.component.html',
  styleUrls: ['./login-pharms.component.css']
})
export class LoginPharmsComponent implements OnInit {

  signInPharmacy: FormGroup;

  constructor(private builder: FormBuilder, public authService: AuthService, private router: Router) {
    this.signInPharmacy = this.builder.group({
      RUC: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  SignIn(): any {
    console.log(this.signInPharmacy);
    this.authService.signInPharm(this.signInPharmacy.value)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('_id', res.PharmacyFound._id);
          localStorage.setItem('email', res.PharmacyFound.email);
          localStorage.setItem('rol', res.PharmacyFound.roles[0].name);
          localStorage.setItem('name', res.PharmacyFound.name);

          if (res.PharmacyFound.roles[0].name === 'admin') {
            this.router.navigate(['/admin/dashboard']);
          } else {
            this.router.navigate(['/farmacia/dashboard']);
          }
        },
        err => {
          Swal.fire(
            'Lo sentimos!',
            `${err.error.message}!`,
            'error'
          );
        }
        );
  }

}
