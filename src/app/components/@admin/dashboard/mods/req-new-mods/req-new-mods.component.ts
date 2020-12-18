import { AuthService } from 'src/app/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PharmsService } from 'src/app/services/pharms.service';
import PharmRequest from 'src/app/interfaces/PharmRequest';

@Component({
  selector: 'app-req-new-mods',
  templateUrl: './req-new-mods.component.html',
  styleUrls: ['./req-new-mods.component.css']
})
export class ReqNewModsComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private ps: PharmsService, private as: AuthService) { }

  reqPharmacy = [];
  request: any;

  ngOnInit(): void {

   this.request =  this.ps.getRequestPharms()
    .subscribe(
      res => {
        this.reqPharmacy = res;
      },
      err => {console.log(err); }
    );
  }

  deny(id: string): any {
    this.ps.deleteRequestPharms(id)
    .subscribe(
      res => {
        this.router.navigate(['/admin/dashboard/lista-moderadores']);
        Swal.fire(
          'Lastima!',
          `Se ha rechazado la solicitud de la Farmacia...`,
          'error'
        );
      },
      err => {console.log(err); }
    );

  }
  accept(req: PharmRequest): any {
    this.as.signUpPharm(req)
        .subscribe(
          res => {
            Swal.fire(
              'Felicidades!',
              `La farmacia ${req.name} se ha registrado satisfactoriamente!`,
              'success'
              );
            this.router.navigate(['/admin/dashboard/lista-moderadores']);
          },
          err => {
            console.log(err);
          }
        );
    this.deny(req._id);
  }
  ngOnDestroy(): void {
    this.request.unsubscribe();
  }
}
