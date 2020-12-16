import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {

  UpdateUserInfo: FormGroup;
  id: string;
  UserInfo: any;

  constructor(private builder: FormBuilder, private router: Router, private userService: UsersService) {

    this.UpdateUserInfo = this.builder.group({
      username: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      imgURL: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = localStorage.getItem('_id');
  }

  getInfo(): any {
    this.userService.getSingleUser(this.id)
    .subscribe(
      res => {
        console.log(res);

        this.UserInfo = res;

        const {username, email, phone, address, imgURL} = this.UserInfo;

        this.UpdateUserInfo.patchValue({
          username,
          email,
          phone,
          address,
          imgURL

        });
      },
      err => {
        console.log(err);
      }
    );
  }

  update(valueForm): any {
    console.log(valueForm);
    this.userService.updateUser(valueForm, this.id)
    .subscribe(
      res => {
        this.router.navigate(['/perfil/historial-compra']);
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
