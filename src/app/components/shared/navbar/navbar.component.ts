import { CartService } from './../../../services/cart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {UsersService} from '../../../services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public authService: AuthService, public us: UsersService, public cs: CartService) { }

  numberCart: number;
  rol: string;

  ngOnInit(): any {
    this.rol = localStorage.getItem('rol');

  }


}


// return this.rol = localStorage.getItem('rol');
