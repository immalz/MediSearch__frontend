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
      username: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      roles: [['moderator']]
    });

  }

  ngOnInit(): void {
  }

  send(valueForm): any {
    Swal.fire(
      'Felicidades!',
      `La farmacia ${valueForm.username} se ha registrado satisfactoriamente!`,
      'success'
    ).then(result => {
      if (result.value) {
        this.authService.signUp(valueForm)
        .subscribe(
          res => {
            this.router.navigate(['/admin/dashboard/lista-moderadores']);
          },
          err => {console.log(err); }
        );
      }
    });
  }
}
