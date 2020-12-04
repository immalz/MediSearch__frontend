import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PharmsService } from 'src/app/services/pharms.service';

@Component({
  selector: 'app-req-new-mods',
  templateUrl: './req-new-mods.component.html',
  styleUrls: ['./req-new-mods.component.css']
})
export class ReqNewModsComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private ps: PharmsService) { }

  reqPharmacy = [];
  request: any;

  ngOnInit(): void {

   this.request =  this.ps.getRequestPharms()
    .subscribe(
      res => {
        console.log(res);
        this.reqPharmacy = res;
      },
      err => {console.log(err); }
    );
  }

  deny(id: string): any {
    this.ps.deleteRequestPharms(id)
    .subscribe(
      res => {
        console.log(res);
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
  accept(): any {
    this.router.navigate(['/admin/dashboard/lista-moderadores']);
    Swal.fire(
      'Felicidades!',
      `La nueva Farmacia ha sido agregada satisfactoriamente`,
      'success'
    );
  }
  ngOnDestroy(): void {
    this.request.unsubscribe();
  }


}
