import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {

  UpdateUserInfo: FormGroup;
  constructor(private builder: FormBuilder, private router: Router) {
    this.UpdateUserInfo = this.builder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      imgURL: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  getInfo(): any {
  }

  update(valueForm): any {}

}
