import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsersService } from '../../../services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  constructor(private us: UsersService, private router: Router) { }

  Users = [];

  CountUser: any;

  finish: any;

  ngOnInit(): void {
    this.finish = this.us.getUsers()
      .subscribe(
        res => {
          this.Users = res;
          console.log(this.Users);
        },
        err => { console.log(err); }
      );
  }

  remove(id: string): any {
      Swal.fire({
        title: `¿Seguro que deseas eliminar este usuario?`,
        text: 'La eliminació es irreversible',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4052C2',
        cancelButtonColor: '#F44437',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.value) {
          this.us.deleteUser(id)
          .subscribe(
            res => {
              console.log(res);
            },
            err => { console.log(err); }
          );
          Swal.fire(
            'Eliminado!',
            'El usuario ha sido eliminado correctamente',
            'success'
          );
        }
      });
  }

  ngOnDestroy(): void {
    this.finish.unsubscribe();
  }
}
